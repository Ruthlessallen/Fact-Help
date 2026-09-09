export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  category: string;
  author: string;
  publishedAt: string;
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "news-1",
    title: "Local bakery claims croissant can predict the weather",
    summary:
      "A pastry chef insists the flakiness of their morning croissants accurately forecasts rain or sunshine.",
    category: "Food & Weather",
    author: "Claire Dupont",
    publishedAt: "2026-09-01T08:30:00Z",
  },
  {
    id: "news-2",
    title: "City council debates ban on silent humming in elevators",
    summary:
      "Commuters express mixed feelings as officials consider measures against non-verbal elevator noises.",
    category: "Local Politics",
    author: "Marcus Vance",
    publishedAt: "2026-09-02T11:15:00Z",
  },
  {
    id: "news-3",
    title: "Scientists discover coffee cups hold more gossip than caffeine",
    summary:
      "A lighthearted behavioral study finds breakroom beverages fuel office chatter more than actual productivity.",
    category: "Science & Lifestyle",
    author: "Dr. Elena Rostova",
    publishedAt: "2026-09-03T09:45:00Z",
  },
  {
    id: "news-4",
    title: "Mayor announces free parking for left-handed drivers only",
    summary:
      "The unusual civic initiative aims to balance parking accessibility, though enforcement proves puzzling.",
    category: "Civic Affairs",
    author: "Julian Reed",
    publishedAt: "2026-09-04T14:00:00Z",
  },
  {
    id: "news-5",
    title: "Rare pigeon spotted wearing tiny business suit downtown",
    summary:
      "Urban birdwatchers gather in downtown square to document a remarkably dapper metropolitan pigeon.",
    category: "Oddities",
    author: "Samantha Brooks",
    publishedAt: "2026-09-05T16:20:00Z",
  },
  {
    id: "news-6",
    title: "Study finds 73% of socks disappear into an alternate dimension",
    summary:
      "Physicists and laundry enthusiasts join forces to investigate missing footwear anomalies worldwide.",
    category: "Science",
    author: "Prof. Arthur Pendelton",
    publishedAt: "2026-09-06T10:10:00Z",
  },
  {
    id: "news-7",
    title: "New app promises to translate cat meows into mild complaints",
    summary:
      "Pet owners discover their felines are primarily dissatisfied with breakfast timing and cushion placement.",
    category: "Technology",
    author: "Chloe Tanaka",
    publishedAt: "2026-09-07T13:05:00Z",
  },
  {
    id: "news-8",
    title: "Bridge renamed after viral sandwich that stopped traffic",
    summary:
      "Following an internet sensation involving a dropped hero sandwich, local leaders make the homage official.",
    category: "Community",
    author: "Leo Henderson",
    publishedAt: "2026-09-08T17:40:00Z",
  },
];
