import { defineRoute } from "../lib/route.ts";

const NEWS = [
  "Local bakery claims croissant can predict the weather",
  "City council debates ban on silent humming in elevators",
  "Scientists discover coffee cups hold more gossip than caffeine",
  "Mayor announces free parking for left-handed drivers only",
  "Rare pigeon spotted wearing tiny business suit downtown",
  "Study finds 73% of socks disappear into an alternate dimension",
  "New app promises to translate cat meows into mild complaints",
  "Bridge renamed after viral sandwich that stopped traffic",
];
const handler = defineRoute(async ({ env, url }) => {
  const question = url.searchParams.get("question")?.trim();
  if (!question) {
    return Response.json(
      { error: "The 'question' query parameter is required." },
      { status: 400 },
    );
  }

  const prompt = `You are a helpful filtering assistant.

Given the following list of news articles:
${JSON.stringify(NEWS, null, 2)}

Question:
${question}

Filter the list and return only the news that match the question.`;

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
                description:
                  "The news articles from the input list that match the question",
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

  let result: Record<string, unknown>;
  if (
    typeof response === "object" &&
    response !== null &&
    "response" in response &&
    typeof (response as { response: unknown }).response === "string"
  ) {
    try {
      const parsed = JSON.parse((response as { response: string }).response);
      if (typeof parsed === "object" && parsed !== null) {
        result = {
          ...response,
          ...parsed,
          parsed,
        };
      } else {
        result = { ...response };
      }
    } catch {
      result = { ...response };
    }
  } else if (typeof response === "object" && response !== null) {
    result = { ...response };
  } else {
    result = { response };
  }

  if (Array.isArray(result.matches) && !result.filtered) {
    result.filtered = result.matches;
  } else if (Array.isArray(result.filtered) && !result.matches) {
    result.matches = result.filtered;
  }

  return Response.json(result);
});

export default Object.assign(handler, {
  async fetch(request: Request, env: Env): Promise<Response> {
    return await handler({ request, env, url: new URL(request.url) });
  },
});
