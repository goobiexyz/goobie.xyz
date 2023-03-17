function truncateString(s:string, limit:number):string {
  if (s.length > limit) {
    return s.substring(0, limit) + " ..."
  } else {
    return s
  }
}

export default truncateString
