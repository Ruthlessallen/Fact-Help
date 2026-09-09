<script setup>
defineProps({
  news: {
    type: Object,
    required: true,
  },
})

function formatDate(isoDate) {
  const date = new Date(isoDate)
  if (Number.isNaN(date.getTime())) return ''

  return date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
</script>

<template>
  <article class="news-card">
    <span class="stripe" :class="news.sourceType"></span>
    <div class="content">
      <div class="meta">
        <span class="source">{{ news.source }}</span>
        <span
          class="badge"
          :class="news.sourceType"
        >{{ news.sourceType === 'local' ? 'Medio local' : 'Medio nacional' }}</span>
        <span class="dot">·</span>
        <span class="location">{{ news.location }}</span>
        <span class="dot">·</span>
        <time :datetime="news.publishedAt">{{ formatDate(news.publishedAt) }}</time>
      </div>
      <h2>{{ news.title }}</h2>
      <p class="summary">{{ news.summary }}</p>
      <a
        v-if="news.url"
        class="link-button"
        :href="news.url"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver noticia original
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      </a>
    </div>
  </article>
</template>

<style scoped>
.news-card {
  display: flex;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--card-bg);
  overflow: hidden;
  transition: box-shadow 0.2s, border-color 0.2s;
}

.news-card:hover {
  box-shadow: var(--shadow);
  border-color: var(--accent-border);
}

.stripe {
  width: 5px;
  flex-shrink: 0;
  background: var(--text);
  opacity: 0.25;
}

.stripe.local {
  background: var(--accent);
  opacity: 1;
}

.content {
  padding: 18px 22px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.meta {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--text);
}

.source {
  font-weight: 600;
  color: var(--text-h);
}

.badge {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--code-bg);
  color: var(--text);
}

.badge.local {
  background: var(--accent-bg);
  color: var(--accent);
}

.dot {
  opacity: 0.5;
}

h2 {
  font-size: 19px;
  margin: 0;
  letter-spacing: -0.2px;
}

.summary {
  font-size: 14.5px;
  line-height: 150%;
  color: var(--text);
}

.link-button {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  align-self: flex-start;
  margin-top: 4px;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent);
  text-decoration: none;
}

.link-button:hover {
  text-decoration: underline;
}
</style>
