<script context='module' lang='ts'>
  import apiFetch from '$lib/apiFetch.ts'
  export async function load() {

    let apiResponse: Array<Object> = []
    let comics: Array<Object> = []
    let thumbnailUrls: Array<Object> = []
    let props = {
      comicDataList : []
    }

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
    props.comicDataList = comics.map((comic, i) => {
      return {
        title         : comic.attributes.title,
        thumbnailUrl  : thumbnailUrls[i],
        latestRelease : comic.attributes.comic_chapters.data[0].attributes.release_date,
        type          : comic.attributes.type,
        url           : comic.attributes.url
      }
    })
    .sort((a, b) => (a.latestRelease < b.latestRelease) ? 1 : -1)

    return { props }
  }
</script>





<script>
  export let comicDataList

  import * as Dfs from '$lib/defaults.js'
  import convertDate from '$lib/convert-date.js'
  import Image from '$lib/components/media/Image.svelte'
</script>



<Dfs.Page title='Comics'>
  <Dfs.Section heading='' simple='true'>
    <ul class='comics-gallery'>

      {#each comicDataList as comicData}
        <li>
          <a href="/comics/{comicData.url}">

            <Image
              src='https://api.graciebell.art{comicData.thumbnailUrl}'
              alt=''
              lazy={true}
              style='width:100%;border-radius:var(--rounded-1);'
            />

            <p class='comic-name'>{comicData.title}</p>

            <div class='info'>
              <p class='comic-type'>
                {#if comicData.type == 'single_volume'}
                  Single-Volume
                {:else if comicData.type == 'multi_volume'}
                  Multi-Volume
                {:else if comicData.type == 'strip'}
                  Comic Strip
                {/if}
              </p>

              <p class='latest-release'>
                {#if comicData.type != 'single_volume'}
                  <span style='display:inline-block'>Latest:</span>
                {/if}
                <time style='display:inline-block'>{convertDate(comicData.latestRelease)}</time>
              </p>
            </div>

          </a>
        </li>
      {/each}

    </ul>
  </Dfs.Section>
</Dfs.Page>



<style lang='postcss'>
  .comics-gallery {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: var(--margin);

    a, a:hover {
      text-decoration: none;
    }

    a {
      color: inherit;
      display: grid;
      gap: 0.5rem;
      img {
        width: 100%;
        display: block;
      }
    }
  }

  .comic-name {
    font-weight: bold;
    font-size: large;
  }

  .info {
    font-size: 0.75rem;
    display: grid;
  }

  .latest-release {
    color: lightslategray;
  }

  time {
    font-family: monospace;
    font-size: 0.75rem;
  }


  @media only screen and (max-width: token(breakpoints.ss)) {
    .comics-gallery {
      grid-template-columns: 1fr 1fr;
      gap: calc(var(--margin)*1.5);
    }

    .info {
      font-size: 1rem;
      gap: 0.4rem;
    }

    time {
      font-size: 1rem;
    }
  }
</style>
