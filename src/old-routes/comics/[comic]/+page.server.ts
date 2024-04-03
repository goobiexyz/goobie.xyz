import apiFetch from '$lib/apiFetch.ts'
export async function load({ params }) {

  let apiResponse: Array<Object> = []
  let comicData = {}

  // get the comic and its chapters
  apiResponse = await apiFetch(
    'comics',
    'filters[url][$eq]='+params.comic,
    'populate[0]=comic_chapters',
    'populate[1]=thumbnail'
  )
  if (apiResponse != null) {
    let comic = apiResponse[0].attributes
    comicData = {
      title     : comic.title,
      url       : comic.url,
      desc      : comic.description,
      type      : comic.type,
      thumbnail : comic.thumbnail.data.attributes.url,
      chapters  : comic.comic_chapters.data.map((ch) => {
        return {
          index : ch.attributes.chapter_number,
          title  : ch.attributes.title,
          date   : ch.attributes.release_date
        }
      })
      .sort((a, b) => (a.index > b.index) ? 1 : -1)
    }
  }

  return { comicData }
}