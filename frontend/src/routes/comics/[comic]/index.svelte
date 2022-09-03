<script context='module' lang='ts'>
  import apiFetch from '$lib/apiFetch.ts'
  export async function load({ params }) {

    let apiResponse: Array<Object> = []
    let props = {
      comicData : {}
    }

    // get the comic and its chapters
    apiResponse = await apiFetch(
      'comics',
      'filters[url][$eq]='+params.comic,
      'populate[0]=comic_chapters',
      'populate[1]=thumbnail'
    )
    if (apiResponse != null) {
      let comic = apiResponse[0].attributes
      props.comicData = {
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

    return { props }
  }
</script>




<script>
  export let comicData

  import * as Dfs from '$lib/defaults.js'
  import FlexCols from '$lib/components/layout/FlexCols.svelte'
  import SpacedDiv from '$lib/components/layout/SpacedDiv.svelte'
  import Image from '$lib/components/media/Image.svelte'
  import convertDate from '$lib/convert-date.js'
</script>



<Dfs.Page title='Comics'>
  <Dfs.Section simple='true' spacing='double'>

    <a href="/comics">Comics</a>

    <FlexCols>
      <div class='col-1'>
        <div>
          <Image
            src='https://api.graciebell.art{comicData.thumbnail}'
            style='max-width:13.66rem; border-radius:var(--rounded-2);'
            alt=''>
          </Image>
        </div>
      </div>

      <div class='col-2'>
        <SpacedDiv>
          <p class='comic-title'>{comicData.title}</p>
          <p class='comic-desc'>{comicData.desc}</p>
        </SpacedDiv>
      </div>
    </FlexCols>


    <div id='chapters'>
      <SpacedDiv>
        <h2>
          {#if comicData.type == 'multi_volume'}
            Chapters
          {:else if comicData.type == 'single_volume'}
            Single-Volume
          {:else if comicData.type == 'strip'}
            Strips
          {/if}
        </h2>

        <ol>
          {#each comicData.chapters as chapterData}
            <li>
              <a href='/comics/{comicData.url}/{chapterData.index}'>
                <p class='ch-title'>
                {comicData.type == "multi_volume" ? "Ch. "+chapterData.index+" - " : ""}
                {chapterData.title}</p>
                <p><time>{convertDate(chapterData.date)}</time></p>
              </a>
            </li>
          {/each}
        </ol>
      </SpacedDiv>
    </div>

  </Dfs.Section>
</Dfs.Page>



<style lang='postcss'>
  ol {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--half-margin);

    a {
      text-decoration: none;
      color: var(--black);
      display: block;
    }

    time {
      font-family: monospace;
      font-size: 0.75rem;
      color: lightslategray;
    }
  }

  .comic-title {
    font-size: xx-large;
    font-weight: bold;
  }

  .ch-title {
    font-size: 0.8rem;
  }

  .col-1 {
    flex: 1 1 20%;

    display: flex;
    justify-content: space-evenly;
  }
  .col-2 {
    flex: 1 1 60%;
    min-width: 35ch;
  }



  @media only screen and (max-width: token(breakpoints.ss)) {
    .comic-title {
      font-size: x-large;
    }

    .ch-title {
      font-size: 1rem;
    }

    ol time {
      font-size: 1rem;
    }

    .col-2 {
      min-width: 100%;
    }
    ol {
      grid-template-columns: 1fr;
    }
  }
</style>
