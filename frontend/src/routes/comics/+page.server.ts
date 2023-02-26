import apiFetch from '$lib/apiFetch.ts'
export async function load() {

  let apiResponse: Array<Object> = []
  let comics: Array<Object> = []
  let thumbnailUrls: Array<Object> = []
  let comicDataList = []

  // get the comics with their chapters sorted by date, newest first
  apiResponse = await apiFetch(
    'comics',
    'populate[comic_chapters][sort][1]=release_date:desc'
  )
  if (apiResponse != null) {
    comics = apiResponse
  }

  // get the thumbnails for all the comics
  apiResponse = await apiFetch(
    'comics',
    'populate[thumbnail][fields][0]=url'
  )
  if (apiResponse != null) {
    thumbnailUrls = apiResponse.map((comic) => { return comic.attributes.thumbnail.data.attributes.url })
  }

  // make a list of comics, sorted by the release date of its newest chapter
  comicDataList = comics.map((comic, i) => {
    return {
      title         : comic.attributes.title,
      thumbnailUrl  : thumbnailUrls[i],
      latestRelease : comic.attributes.comic_chapters.data[0].attributes.release_date,
      type          : comic.attributes.type,
      url           : comic.attributes.url
    }
  })
  .sort((a, b) => (a.latestRelease < b.latestRelease) ? 1 : -1)

  return { comicDataList }
}