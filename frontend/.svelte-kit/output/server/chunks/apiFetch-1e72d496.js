const apiUrl = "https://api.graciebell.art/api/";
async function apiFetch(collection, ...queryParams) {
  let url = apiUrl + collection + "?" + queryParams.join("&");
  let res = await fetch(url).then((r) => r.json());
  return res.data;
}
export { apiFetch as a };
