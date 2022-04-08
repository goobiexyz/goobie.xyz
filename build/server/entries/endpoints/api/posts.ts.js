async function get({ url }) {
  const params = url.searchParams.toString();
  const res = await fetch(`http://localhost:1337/api/posts?${params}`);
  return {
    status: res.status,
    body: res.ok && await res.json()
  };
}
export { get };
