function convertDate(d) {
  let date = new Date(Date.parse(d))
  return date.toUTCString().substring(5, 16).toUpperCase()
}

export default convertDate
