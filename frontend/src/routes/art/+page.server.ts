let pageSize = 15 // posts per page

export async function load({ fetch }) {
  // get pagination metadata
  let params = [
    `filters[media_type][$eq]=art`, // filter only art
    `pagination[pageSize]=${pageSize}` // posts per page
  ]
  let res = await fetch(`https://api.graciebell.art/api/posts?${params.join('&')}`)
  let data = await res.json()

  let pagination = data.meta.pagination

  return {
    pagination,
  }
}