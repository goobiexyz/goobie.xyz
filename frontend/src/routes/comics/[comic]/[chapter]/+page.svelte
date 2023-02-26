<script>
  export let data

  import * as Dfs from '$lib/defaults.js'
  import Image from '$lib/components/media/Image.svelte'
  import IconLink from '$lib/components/controls/IconLink.svelte'
  import { page } from '$app/stores'
</script>

<Dfs.Page title={data.chapterData.title} header={false} footer={false} dark={true}>
  <Dfs.Section simple='true' spacing='double'>
    <header>
      <nav>
        <a class='back' href='/comics/{$page.params.comic}'>Chapters</a>
        <h1 style='color:white'>
          {data.comicData.type == "multi_volume" ? "Ch. "+data.chapterData.index+" - " : ""}
          {data.chapterData.title}
        </h1>
      </nav>
    </header>

    {#each data.chapterData.pageImgURLs as pageImgURL}
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
        {#if data.chapterData.index > 1}
          <a sveltekit:reload href='/comics/{$page.params.comic}/{data.chapterData.index - 1}'>
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
        {#if data.comicData.lastChapterIndex != data.chapterData.index}
          <a sveltekit:reload href='/comics/{$page.params.comic}/{data.chapterData.index + 1}'>
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
