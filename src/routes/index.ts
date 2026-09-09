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

  let matches: string[] = [];
  let parsed: unknown = response;

  if (
    typeof response === "object" &&
    response !== null &&
    "response" in response &&
    typeof (response as { response: unknown }).response === "string"
  ) {
    try {
      parsed = JSON.parse((response as { response: string }).response);
    } catch {
      parsed = null;
    }
  }

  if (typeof parsed === "object" && parsed !== null) {
    const candidate =
      (parsed as { matches?: unknown; filtered?: unknown }).matches ??
      (parsed as { matches?: unknown; filtered?: unknown }).filtered;
    if (Array.isArray(candidate)) {
      matches = candidate.filter((item): item is string => typeof item === "string");
    }
  }

  const matchedSet = new Set(matches.map((title) => title.trim().toLowerCase()));
  const matchedArticles = NEWS_ARTICLES.filter((article) =>
    matchedSet.has(article.title.trim().toLowerCase()),
  );

  return Response.json(matchedArticles);
});

export default Object.assign(handler, {
  async fetch(request: Request, env: Env): Promise<Response> {
    return await handler({ request, env, url: new URL(request.url) });
  },
});
