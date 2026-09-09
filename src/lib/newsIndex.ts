import type { NewsArticle } from "../data/news.ts";
import { embedTexts } from "./embeddings.ts";

function articleText(article: NewsArticle): string {
  return [article.title, article.story, article.source, article.location].filter(Boolean).join(". ");
}

// Cached per-isolate: the corpus is fixed for the lifetime of the worker instance,
// so we only pay the embedding cost once instead of on every request.
let cachedEmbeddings: Promise<number[][]> | null = null;

export function getArticleEmbeddings(env: Env, articles: NewsArticle[]): Promise<number[][]> {
  if (!cachedEmbeddings) {
    cachedEmbeddings = embedTexts(env, articles.map(articleText));
  }
  return cachedEmbeddings;
}
