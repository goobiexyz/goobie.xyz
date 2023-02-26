import truncateString from '$lib/truncate-string.ts'
import apiFetch from '$lib/apiFetch.ts'

export async function load() {
  let latestPosts = []

  //get all the art posts
  let art = await apiFetch(
    'posts',
    'sort=date:desc',
    'populate[0]=thumbnail',
    'populate[1]=media_file',
    'pagination[limit]=5'
  )
  if (art != null) {
    latestPosts = art.map((post) => {
      let a = post.attributes
      return {
        thumbnailUrl : a.thumbnail.data.attributes.formats.thumbnail.url,
        type         : a.media_type,
        title        : a.title,
        date         : a.date,
        desc         : a.description,
        attributes   : a
      }
    })
  }


  let comicChapters = await apiFetch(
    'comic-chapters',
    'sort=release_date:desc',
    'populate[0]=thumbnail',
    'populate[1]=comic',
    'pagination[limit]=5'
  )
  if (comicChapters != null) {
    for (const ch of comicChapters) {
      let a = ch.attributes

      let thumbnailUrl = ''
      if (a.thumbnail.data != null) {
        thumbnailUrl = a.thumbnail.data.attributes.formats.thumbnail.url
      } else {

        let comic = await apiFetch(
          'comics',
          'filters[url][$eq]='+a.comic.data.attributes.url,
          'populate[0]=thumbnail'
        )

        if (comic != null) {
          let thumb = comic[0].attributes.thumbnail.data.attributes
          thumbnailUrl = thumb.formats.thumbnail.url
        }
      }
      latestPosts.push({
        attributes   : a,
        thumbnailUrl : thumbnailUrl,
        type         : 'comic',
        title        : a.title,
        date         : a.release_date,
        desc         : a.description,
        href         : '/comics/'+a.comic.data.attributes.url+'/'+a.chapter_number
      })
    }
  }


  latestPosts.sort((a, b) => (a.date > b.date) ? -1 : 1)

  return { 
    latestPosts,
   }
}