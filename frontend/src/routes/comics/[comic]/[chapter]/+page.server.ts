import apiFetch from '$lib/apiFetch.ts'
export async function load({ params }) {

  let apiResponse: Array<Object> = []
  let chapterData = {}
  let comicData = {};

  // get the chapter & its pages
  apiResponse = await apiFetch(
    'comic-chapters',
    'populate[0]=comic',
    'populate[1]=pages',
    'filters[comic][url][$eq]='+params.comic,
    'filters[chapter_number][$eq]='+params.chapter
  )
  if (apiResponse != null) {
    let chapter = apiResponse[0].attributes
    chapterData = {
      title       : chapter.title,
      index      : parseInt(chapter.chapter_number),
      pageImgURLs : chapter.pages.data.map(
        (page) => { return page.attributes.url }
      )
    }
    comicData = {
      title : chapter.comic.data.attributes.title,
      type  : chapter.comic.data.attributes.type,
      url   : chapter.comic.data.attributes.url
    }
  }

  // get the latest chapter_number of the comic
  apiResponse = await apiFetch(
    'comic-chapters',
    'populate[comic][fields]=url',
    'filters[comic][url][$eq]='+comicData.url,
    'sort=release_date:desc',
    'pagination[limit]=1'
  )
  if (apiResponse != null) {
    comicData.lastChapterIndex = parseInt(apiResponse[0].attributes.chapter_number)
  }

  return {
    comicData,
    chapterData,
  }
}