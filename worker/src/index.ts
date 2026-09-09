import type { RouteHandler } from "./lib/route.ts";
import debug from "./routes/debug.ts";
import index from "./routes/index.ts";

const routes = new Map<string, RouteHandler>([
  ["/", index],
  ["/debug", debug],
]);

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname.replace(/\/+$/, "") || "/";
    const handler = routes.get(pathname);

    if (!handler) {
      return new Response("Not Found", { status: 404 });
    }

    try {
      return await handler({
        request,
        env,
        url,
      });
    } catch (error) {
      console.error("Worker unhandled error:", error);
      const message = error instanceof Error ? error.message : "Internal Server Error";
      return new Response(`Internal Server Error: ${message}`, { status: 500 });
    }
  },
};
