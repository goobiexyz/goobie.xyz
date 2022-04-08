<script context='module'>
  let pageSize = 15 // posts per page

  export async function load({ fetch }) {
    // get pagination metadata
    let params = [
      `filters[media_type][$eq]=art`, // filter only art
      `pagination[pageSize]=${pageSize}` // posts per page
    ]
    let res = await fetch(`/api/posts?${params.join('&')}`)
    let data = await res.json()
    return {
      props: {
        pagination: data.meta.pagination
      }
    }
  }
</script>


<script>
  import * as Dfs from '$lib/defaults.js'
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import Image from '$lib/components/media/Image.svelte'
  import PageControls from '$lib/components/controls/PageControls.svelte'
  import MediaModal from '$lib/components/posts/media-modal/MediaModal.svelte'
  import constrain from '$lib/constrain.ts'


  export let pagination


  let mediaModal

  let posts = []
  let pageNum = 1
  let lastPage = pagination.pageCount


  onMount(async () => {
    await getPosts()
    // maybe do some sort of fade-in loading
  })


  async function getPosts() {
    if ($page.url.searchParams.has('page')) {
      pageNum = constrain($page.url.searchParams.get('page'), 1, lastPage)
    } else {
      pageNum = 1
    }

    let params = [
      `filters[media_type][$eq]=art`, // filter only art
      `sort=date:desc`, // sort by descending date
      `pagination[page]=${pageNum}`, // page number
      `pagination[pageSize]=${pagination.pageSize}`, // posts per page
      `pagination[withCount]=false`, // don't need the pagination metadata again
      `populate[0]=thumbnail`, // get the thumbnail
      `populate[1]=media_file` // get the actual image
    ]
    let res = await fetch(`/api/posts?${params.join('&')}`)
    let resJson = await res.json()
    posts = resJson.data
  }

  function changePageBy(n) {
    pageNum = constrain(pageNum + n, 1, lastPage)
    $page.url.searchParams.set('page', pageNum)
    goto($page.url.toString())
    getPosts()
  }

  function openModal(p) {
    mediaModal.openModal(p)
  }
</script>


<MediaModal bind:this={mediaModal} />
<Dfs.Page title='Art'>
  <Dfs.Section simple="true">
    <PageControls
      pageNum={pageNum}
      lastPage={lastPage}
      on:next={() => changePageBy(1)}
      on:prev={() => changePageBy(-1)}
    />

    <div class='gallery'>
      {#each posts as post}
        <button title={post.attributes.title} on:click={() => openModal(post)}>
          <img
            src='/api{post.attributes.thumbnail.data.attributes.url}'
            alt=''
          />
        </button>
      {/each}
    </div>
  </Dfs.Section>
</Dfs.Page>


<style lang='scss'>
  @import 'src/styles/spacing.scss';
  @import 'src/styles/breakpoints.scss';

  .gallery {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: $half-margin;
  }

  img {
    display: block;
    width: 100%;
    border-radius: 10px;
  }

  button {
    transition: 0.1s transform;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(1);
    }
  }


  @media only screen and (max-width: $s) {
    .gallery {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
