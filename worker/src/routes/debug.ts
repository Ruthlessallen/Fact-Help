import { defineRoute } from "../lib/route.ts";

export default defineRoute(() => {
  return new Response("Hello World (debug)");
});
