import type { EndpointOutput } from '@sveltejs/kit'

export async function get({ params }): Promse<EndpointOutput> {
  const fileName = params.fileName
  const res = await fetch(`http://localhost:1337/uploads/${fileName}`)
  console.log(res)
  return {
    status: res.status,
    body: res.ok && res.body
  }
}
