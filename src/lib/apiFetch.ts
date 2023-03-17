const apiUrl = 'https://api.graciebell.art/api/'

async function apiFetch(collection:string, ...queryParams:string): Array<Object> {
  let url: String = apiUrl + collection + '?' + queryParams.join('&')
  let res: Object = await fetch(url).then(r => r.json())

  return res.data
}

export default apiFetch
