import { NEWS_ARTICLES } from "../data/news.ts";
import { cosineSimilarity, embedTexts } from "../lib/embeddings.ts";
import { getArticleEmbeddings } from "../lib/newsIndex.ts";
import { defineRoute } from "../lib/route.ts";

const TOP_K = 6;
const MIN_SIMILARITY = 0.3;
const GENERATION_MODEL = "@cf/meta/llama-3.3-70b-instruct-fp8-fast";

const handler = defineRoute(async ({ env, url }) => {
  const question = url.searchParams.get("question")?.trim();
  if (!question) {
    return Response.json({ error: "The 'question' query parameter is required." }, { status: 400 });
  }

  // Retrieval: embed the corpus (cached) and the query, then rank by cosine similarity.
  const [articleEmbeddings, [questionEmbedding]] = await Promise.all([
    getArticleEmbeddings(env, NEWS_ARTICLES),
    embedTexts(env, [question]),
  ]);

  const ranked = NEWS_ARTICLES.map((article, index) => ({
    article,
    score: cosineSimilarity(questionEmbedding, articleEmbeddings[index]),
  })).sort((a, b) => b.score - a.score);

  let retrieved = ranked.filter((entry) => entry.score >= MIN_SIMILARITY).slice(0, TOP_K);
  if (retrieved.length === 0) {
    retrieved = ranked.slice(0, 3);
  }

  const matches = retrieved.map((entry) => entry.article);

  if (matches.length === 0) {
    return Response.json({ answer: "No he encontrado noticias relacionadas con tu pregunta.", matches: [] });
  }

  // Augmented generation: ask the LLM to answer grounded only in the retrieved articles.
  const context = matches
    .map(
      (article, index) =>
        `${index + 1}. "${article.title}" — ${article.source} (${article.sourceType}), ${article.location}, ${article.publishedAt}`,
    )
    .join("\n");

  const prompt = `Eres un asistente periodístico. Responde en español, de forma breve (2-4 frases), basándote ÚNICAMENTE en las noticias recuperadas a continuación. Si no permiten responder la pregunta, dilo explícitamente.

Noticias recuperadas:
${context}

Pregunta del usuario: ${question}

Responde de forma directa y menciona los medios cuando sea relevante.`;

  const generation = await env.AI.run(
    GENERATION_MODEL,
    { prompt },
    { gateway: { id: "default" } },
  );

  const answer =
    typeof generation === "object" && generation !== null && "response" in generation
      ? String((generation as { response: unknown }).response)
      : "";

  return Response.json({ answer, matches });
});

export default Object.assign(handler, {
  async fetch(request: Request, env: Env): Promise<Response> {
    return await handler({ request, env, url: new URL(request.url) });
  },
});
