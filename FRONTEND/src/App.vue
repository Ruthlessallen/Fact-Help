<script setup>
import { computed, ref } from 'vue'
import NewsCard from './components/NewsCard.vue'
import FilterPanel from './components/FilterPanel.vue'
import ChatAssistant from './components/ChatAssistant.vue'
import { mockNews } from './data/mockNews.js'

const DAY = 86400000

function timeOf(item) {
  const time = new Date(item.publishedAt).getTime()
  return Number.isNaN(time) ? 0 : time
}

function boundsFor(items) {
  const timestamps = items
    .map((item) => new Date(item.publishedAt).getTime())
    .filter((time) => !Number.isNaN(time))

  if (timestamps.length === 0) {
    const now = Date.now()
    return { min: now - DAY, max: now + DAY }
  }

  return { min: Math.min(...timestamps) - DAY, max: Math.max(...timestamps) + DAY }
}

const news = ref(mockNews)
const bounds = computed(() => boundsFor(news.value))

const keyword = ref('')
const location = ref('')
const dateFrom = ref(bounds.value.min)
const dateTo = ref(bounds.value.max)
const localOnly = ref(false)

function onResults(items) {
  news.value = items
  dateFrom.value = bounds.value.min
  dateTo.value = bounds.value.max
}

const filteredNews = computed(() => {
  const kw = keyword.value.trim().toLowerCase()
  const loc = location.value.trim().toLowerCase()

  let result = news.value.filter((item) => {
    const publishedAt = new Date(item.publishedAt).getTime()
    const matchesKeyword =
      !kw ||
      item.title?.toLowerCase().includes(kw) ||
      item.summary?.toLowerCase().includes(kw) ||
      item.story?.toLowerCase().includes(kw)
    const matchesLocation = !loc || item.location?.toLowerCase().includes(loc)
    const matchesDate =
      Number.isNaN(publishedAt) ||
      (publishedAt >= dateFrom.value && publishedAt <= dateTo.value)

    return matchesKeyword && matchesLocation && matchesDate
  })

  result = [...result].sort((a, b) => timeOf(b) - timeOf(a))

  // sort es estable: al reagrupar por tipo de medio se mantiene el orden por fecha
  if (localOnly.value) {
    result.sort((a, b) => {
      if (a.sourceType === b.sourceType) return 0
      return a.sourceType === 'local' ? -1 : 1
    })
  }

  return result
})
</script>

<template>
  <div id="app">
    <header class="page-header">
      <h1>Dashboard de noticias</h1>
      <p class="subtitle">Seguimiento de cobertura mediática en tiempo real</p>
    </header>

    <FilterPanel
      v-model:keyword="keyword"
      v-model:location="location"
      v-model:dateFrom="dateFrom"
      v-model:dateTo="dateTo"
      v-model:localOnly="localOnly"
      :min-date="bounds.min"
      :max-date="bounds.max"
    />

    <div class="layout">
      <main class="news-list">
        <p class="results-count">
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9h4" />
            <path d="M10 6h8M10 10h8M10 14h5" />
          </svg>
          <strong>{{ filteredNews.length }}</strong>
          {{ filteredNews.length === 1 ? 'noticia' : 'noticias' }}
        </p>

        <p v-if="filteredNews.length === 0" class="empty">
          No hay noticias que coincidan con los filtros seleccionados.
        </p>
        <NewsCard
          v-for="(item, index) in filteredNews"
          :key="item.id ?? item.url ?? index"
          :news="item"
        />
      </main>

      <div class="sidebar">
        <ChatAssistant @results="onResults" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 28px 24px 80px;
  box-sizing: border-box;
}

.page-header {
  margin-bottom: 12px;
}

h1 {
  font-size: 32px;
  margin: 0 0 6px;
  letter-spacing: -0.5px;
}

.subtitle {
  color: var(--text);
  font-size: 15px;
}

.layout {
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: 28px;
  align-items: start;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: sticky;
  top: 20px;
}

.results-count {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: var(--text);
}

.results-count strong {
  color: var(--text-h);
  font-weight: 600;
}

.empty {
  color: var(--text);
  padding: 24px;
  border: 1px dashed var(--border);
  border-radius: 10px;
  text-align: center;
}

@media (max-width: 860px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
</style>
