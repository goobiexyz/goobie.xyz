<script context='module' lang='ts'>
  import apiFetch from '$lib/apiFetch.ts'
  export async function load({ params }) {

    let apiResponse: Array<Object> = []
    let props = {
      chapterData : {},
      comicData   : {}
    }

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
      props.chapterData = {
        title       : chapter.title,
        index      : parseInt(chapter.chapter_number),
        pageImgURLs : chapter.pages.data.map(
          (page) => { return page.attributes.url }
        )
      }
      props.comicData = {
        title : chapter.comic.data.attributes.title,
        type  : chapter.comic.data.attributes.type,
        url   : chapter.comic.data.attributes.url
      }
    }

    // get the latest chapter_number of the comic
    apiResponse = await apiFetch(
      'comic-chapters',
      'populate[comic][fields]=url',
      'filters[comic][url][$eq]='+props.comicData.url,
      'sort=release_date:desc',
      'pagination[limit]=1'
    )
    if (apiResponse != null) {
      props.comicData.lastChapterIndex = parseInt(apiResponse[0].attributes.chapter_number)
    }

    return { props }
  }
</script>




<script>
  export let chapterData
  export let comicData

  import * as Dfs from '$lib/defaults.js'
  import Image from '$lib/components/media/Image.svelte'
  import IconLink from '$lib/components/controls/IconLink.svelte'
  import { page } from '$app/stores'
</script>

<Dfs.Page title={chapterData.title} header={false} footer={false} dark={true}>
  <Dfs.Section simple='true' spacing='double'>
    <header>
      <nav>
        <a class='back' href='/comics/{$page.params.comic}'>🡰 Back</a>
        <h1 style='color:white'>
          {comicData.type == "multi_volume" ? "Ch. "+chapterData.index+" - " : ""}
          {chapterData.title}
        </h1>
      </nav>
    </header>

    {#each chapterData.pageImgURLs as pageImgURL}
    <Image
      src='https://api.graciebell.art{pageImgURL}'
      style='width: 100%'
      alt=''
      lazy={true}>
    </Image>
    {/each}

    <footer>
      <nav>
        <!-- Link to previous chapter, if its not the first chapter -->
        {#if chapterData.index > 1}
          <a sveltekit:reload href='/comics/{$page.params.comic}/{chapterData.index - 1}'>
            <img src='/images/icons/b_line_arrow.svg' alt='' />
            <span>Previous</span>
          </a>
        {:else}
        <!-- blank middle column for when theres no back button, for better spacing-->
          <span />
        {/if}

        <!-- Chapters link -->
        <a href='/comics/{$page.params.comic}'>
          <img src='/images/icons/b_hamburger.svg' alt=''/>
          <span>Chapters</span>
        </a>

        <!-- Link to next chapter, if there is one -->
        {#if comicData.lastChapterIndex != chapterData.index}
          <a sveltekit:reload href='/comics/{$page.params.comic}/{chapterData.index + 1}'>
            <img src='/images/icons/b_line_arrow.svg' alt='' style='transform: scaleX(-1)'/>
            <span>Next</span>
          </a>
        {/if}

      </nav>
    </footer>
  </Dfs.Section>
</Dfs.Page>


<style lang='postcss'>
  h1 {
    font-size: x-large;
  }

  nav {
    width: 100%;
    display: grid;
    grid-template-columns: 4.5rem 1fr 4.5rem;
    text-align: center;
    align-items: center;
    color: white;

    a {
      color: white;
      display: grid;

      img {
        margin: auto;
        height: 4.5rem;
      }
    }
  }

  .back {
    text-align: left;
  }


  @media only screen and (max-width: token(breakpoints.s)) {
    header nav {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      gap: var(--margin)
    }
  }

  @media only screen and (max-width: token(breakpoints.sss)) {
    header nav {
      gap: var(--half-margin)
    }
    h1 {
      font-size: 1.1rem;
      text-align: left;
      font-weight: normal;
    }
    .back {
      font-size: 1rem;
    }
  }
</style>
