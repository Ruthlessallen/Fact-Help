<script setup>
import { nextTick, ref } from 'vue'
import { fetchNews } from '../api/news.js'

const emit = defineEmits(['results'])

const messages = ref([])
const draft = ref('')
const isThinking = ref(false)
const messagesEl = ref(null)

async function scrollToBottom() {
  await nextTick()
  if (messagesEl.value) {
    messagesEl.value.scrollTop = messagesEl.value.scrollHeight
  }
}

async function sendMessage() {
  const text = draft.value.trim()
  if (!text || isThinking.value) return

  messages.value.push({ role: 'user', text })
  draft.value = ''
  isThinking.value = true
  await scrollToBottom()

  try {
    const { answer, matches } = await fetchNews(text)
    emit('results', matches)
    messages.value.push({
      role: 'assistant',
      text:
        answer ||
        (matches.length
          ? `He encontrado ${matches.length} ${matches.length === 1 ? 'noticia' : 'noticias'}. Las tienes en el panel.`
          : 'No he encontrado noticias que coincidan.'),
    })
  } catch (error) {
    messages.value.push({
      role: 'assistant',
      text: `No he podido consultar el servicio: ${error.message}`,
      isError: true,
    })
  } finally {
    isThinking.value = false
    await scrollToBottom()
  }
}
</script>

<template>
  <div class="chat-assistant">
    <h2>Asistente</h2>

    <div ref="messagesEl" class="messages">
      <p v-if="messages.length === 0" class="empty">
        Pregunta sobre las noticias mostradas, por ejemplo "resume las noticias de Barcelona".
      </p>
      <div
        v-for="(message, index) in messages"
        :key="index"
        class="message"
        :class="[message.role, { error: message.isError }]"
      >
        {{ message.text }}
      </div>
      <div v-if="isThinking" class="message assistant thinking">
        <span></span><span></span><span></span>
      </div>
    </div>

    <form class="composer" @submit.prevent="sendMessage">
      <input
        v-model="draft"
        type="text"
        placeholder="Escribe un mensaje..."
      />
      <button type="submit" :disabled="!draft.trim() || isThinking">Enviar</button>
    </form>
  </div>
</template>

<style scoped>
.chat-assistant {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--card-bg);
}

h2 {
  font-size: 13px;
  margin: 0;
}

.messages {
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 200px;
  overflow-y: auto;
  padding-right: 2px;
}

.empty {
  font-size: 12px;
  color: var(--text);
  line-height: 150%;
}

.message {
  max-width: 88%;
  padding: 7px 10px;
  border-radius: 8px;
  font-size: 12.5px;
  line-height: 145%;
}

.message.user {
  align-self: flex-end;
  background: var(--accent);
  color: #fff;
  border-bottom-right-radius: 2px;
}

.message.assistant {
  align-self: flex-start;
  background: var(--code-bg);
  color: var(--text-h);
  border-bottom-left-radius: 2px;
}

.message.error {
  background: rgba(220, 38, 38, 0.1);
  color: #dc2626;
}

.thinking {
  display: flex;
  gap: 4px;
  padding: 10px 12px;
}

.thinking span {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--text);
  opacity: 0.5;
  animation: blink 1.2s infinite;
}

.thinking span:nth-child(2) {
  animation-delay: 0.2s;
}

.thinking span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes blink {
  0%, 80%, 100% {
    opacity: 0.25;
  }
  40% {
    opacity: 0.8;
  }
}

.composer {
  display: flex;
  gap: 6px;
}

.composer input {
  flex: 1;
  min-width: 0;
  font: inherit;
  font-size: 12.5px;
  padding: 7px 9px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--bg);
  color: var(--text-h);
}

.composer input:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 1px;
}

.composer button {
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  padding: 7px 12px;
  border: none;
  border-radius: 6px;
  background: var(--accent);
  color: #fff;
  cursor: pointer;
}

.composer button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
</style>
