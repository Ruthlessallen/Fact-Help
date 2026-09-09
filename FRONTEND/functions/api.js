export async function onRequest({ request, env }) {
  if (!env.WORKER_URL) {
    return Response.json(
      { error: 'Falta la variable WORKER_URL en el proyecto de Pages.' },
      { status: 500 },
    )
  }

  const target = new URL(env.WORKER_URL)
  target.search = new URL(request.url).search

  return fetch(target, { headers: { accept: 'application/json' } })
}
