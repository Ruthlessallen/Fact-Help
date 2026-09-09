import { NEWS_ARTICLES } from "../data/news.ts";
import { defineRoute } from "../lib/route.ts";

const handler = defineRoute(async ({ env, url }) => {
  const question = url.searchParams.get("question")?.trim();
  if (!question) {
    return Response.json({ error: "The 'question' query parameter is required." }, { status: 400 });
  }

  const titles = NEWS_ARTICLES.map((article) => article.title);

  const prompt = `You are a helpful filtering assistant.

Given the following list of news article titles:
${JSON.stringify(titles, null, 2)}

Return the ones that are related with the following topic:
${question}

Filter the list and return only the titles that match the question.`;

  const response = await env.AI.run(
    "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
    {
      prompt,
      response_format: {
        type: "json_schema",
        json_schema: {
          name: "filtered_news",
          schema: {
            type: "object",
            properties: {
              matches: {
                type: "array",
                items: {
                  type: "string",
                },
                description: "The news article titles from the input list that match the question",
              },
            },
            required: ["matches"],
          },
        },
      },
    },
    {
      gateway: {
        id: "default",
      },
    },
  );

  console.log("AI response: " + JSON.stringify(response, null, 2));

  function extractMatches(val: unknown): string[] {
    if (Array.isArray(val)) {
      return val.filter((item): item is string => typeof item === "string");
    }

    if (typeof val === "string") {
      try {
        const parsedJson = JSON.parse(val);
        const extracted = extractMatches(parsedJson);
        if (extracted.length > 0) return extracted;
      } catch {
        // Not a JSON string
      }
      return [];
    }

    if (typeof val === "object" && val !== null) {
      const record = val as Record<string, unknown>;

      for (const key of ["matches", "filtered", "titles", "articles", "news"]) {
        if (key in record) {
          const extracted = extractMatches(record[key]);
          if (extracted.length > 0) return extracted;
        }
      }

      if ("response" in record) {
        const extracted = extractMatches(record.response);
        if (extracted.length > 0) return extracted;
      }

      for (const child of Object.values(record)) {
        const extracted = extractMatches(child);
        if (extracted.length > 0) return extracted;
      }
    }

    return [];
  }

  function normalizeTitle(title: string): string {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  const matches = extractMatches(response);
  const normalizedMatches = matches.map(normalizeTitle).filter((t) => t.length > 0);

  const matchedArticles = NEWS_ARTICLES.filter((article) => {
    const articleNorm = normalizeTitle(article.title);
    return normalizedMatches.some(
      (matchNorm) =>
        articleNorm === matchNorm ||
        (matchNorm.length > 10 && articleNorm.includes(matchNorm)) ||
        (articleNorm.length > 10 && matchNorm.includes(articleNorm)),
    );
  });

  return Response.json(matchedArticles);
});

export default Object.assign(handler, {
  async fetch(request: Request, env: Env): Promise<Response> {
    return await handler({ request, env, url: new URL(request.url) });
  },
});
