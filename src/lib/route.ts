export interface RequestContext {
  request: Request;
  env: Env;
  url: URL;
}

export type RouteHandler = (context: RequestContext) => Response | Promise<Response>;

export function defineRoute(handler: RouteHandler): RouteHandler {
  return handler;
}
