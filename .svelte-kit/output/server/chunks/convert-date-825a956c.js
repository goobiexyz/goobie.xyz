function convertDate(d) {
  let date = new Date(Date.parse(d));
  return `${date.getDate()} ${date.toDateString().substring(4, 7).toUpperCase()} ${date.getFullYear()}`;
}
export { convertDate as c };
