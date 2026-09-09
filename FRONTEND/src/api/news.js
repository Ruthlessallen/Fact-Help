export async function fetchNews(question) {
  let response
  try {
    response = await fetch(`/api?question=${encodeURIComponent(question)}`)
  } catch {
    throw new Error('no se pudo contactar con el worker. ¿Está arrancado?')
  }

  const body = await response.text()
  let data
  try {
    data = JSON.parse(body)
  } catch {
    throw new Error(
      response.ok
        ? 'el worker devolvió una respuesta no válida.'
        : `el worker respondió ${response.status}.`,
    )
  }

  if (!response.ok) {
    throw new Error(data.error ?? `el worker respondió ${response.status}.`)
  }

  return data.matches ?? []
}
