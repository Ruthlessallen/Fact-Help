<script setup>
const keyword = defineModel('keyword', { default: '' })
const location = defineModel('location', { default: '' })
const dateFrom = defineModel('dateFrom', { required: true })
const dateTo = defineModel('dateTo', { required: true })
const localOnly = defineModel('localOnly', { default: false })

const props = defineProps({
  minDate: { type: Number, required: true },
  maxDate: { type: Number, required: true },
})

function pad(n) {
  return String(n).padStart(2, '0')
}

function toLocalInputValue(timestamp) {
  const d = new Date(timestamp)
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
}

function onFromInput(value) {
  const next = new Date(value).getTime()
  if (Number.isNaN(next)) return
  dateFrom.value = next > dateTo.value ? dateTo.value : next
}

function onToInput(value) {
  const next = new Date(value).getTime()
  if (Number.isNaN(next)) return
  dateTo.value = next < dateFrom.value ? dateFrom.value : next
}
</script>

<template>
  <section class="filter-panel">
    <div class="fields">
    <div class="field">
      <label for="keyword">Palabra clave</label>
      <input
        id="keyword"
        v-model="keyword"
        type="text"
        placeholder="Buscar por título o contenido..."
      />
    </div>

    <div class="field">
      <label for="location">Ubicación</label>
      <input
        id="location"
        v-model="location"
        type="text"
        placeholder="Ciudad, provincia..."
      />
    </div>

    <div class="field">
      <label for="date-from">Desde</label>
      <input
        id="date-from"
        type="datetime-local"
        :min="toLocalInputValue(minDate)"
        :max="toLocalInputValue(maxDate)"
        :value="toLocalInputValue(dateFrom)"
        @input="onFromInput($event.target.value)"
      />
    </div>

    <div class="field">
      <label for="date-to">Hasta</label>
      <input
        id="date-to"
        type="datetime-local"
        :min="toLocalInputValue(minDate)"
        :max="toLocalInputValue(maxDate)"
        :value="toLocalInputValue(dateTo)"
        @input="onToInput($event.target.value)"
      />
    </div>

    <div class="field checkbox-field">
      <label>
        <input v-model="localOnly" type="checkbox" />
        Priorizar medios locales
      </label>
    </div>
    </div>
  </section>
</template>

<style scoped>
.filter-panel {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 14px 16px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--card-bg);
  margin-bottom: 24px;
}

h2 {
  font-size: 13px;
  margin: 0;
}

.fields {
  display: flex;
  flex-wrap: wrap;
  align-items: end;
  gap: 16px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1 1 160px;
  min-width: 140px;
}

label {
  font-size: 11.5px;
  font-weight: 600;
  color: var(--text-h);
  white-space: nowrap;
}

input[type='text'],
input[type='datetime-local'] {
  font: inherit;
  font-size: 12.5px;
  padding: 6px 9px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--bg);
  color: var(--text-h);
  width: 100%;
  box-sizing: border-box;
}

input[type='datetime-local'] {
  color-scheme: light dark;
}

input[type='text']:focus-visible,
input[type='datetime-local']:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 1px;
}

.checkbox-field {
  flex: 0 0 auto;
}

.checkbox-field label {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 12.5px;
  font-weight: 500;
  color: var(--text-h);
  cursor: pointer;
  white-space: nowrap;
  padding-bottom: 6px;
}

.checkbox-field input {
  width: 14px;
  height: 14px;
  accent-color: var(--accent);
  cursor: pointer;
}
</style>
