<script context='module'>
  let pageSize = 15 // posts per page

  export async function load({ fetch }) {
    // get pagination metadata
    let params = [
      `filters[media_type][$eq]=art`, // filter only art
      `pagination[pageSize]=${pageSize}` // posts per page
    ]
    let res = await fetch(`https://api.graciebell.art/api/posts?${params.join('&')}`)
    let data = await res.json()
    return {
      props: {
        pagination: data.meta.pagination
      }
    }
  }
</script>


<script>
  export let pagination

  import * as Dfs from '$lib/defaults.js'
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import Image from '$lib/components/media/Image.svelte'
  import PageControls from '$lib/components/controls/PageControls.svelte'
  import MediaModal from '$lib/components/posts/media-modal/MediaModal.svelte'
  import constrain from '$lib/constrain.ts'

  let mediaModal
  let pageNum = 1
  let lastPage = pagination.pageCount
  let posts = []

  onMount(getPosts)

  async function getPosts() {
    if ($page.url.searchParams.has('page')) {
      pageNum = constrain($page.url.searchParams.get('page'), 1, lastPage)
    } else {
      pageNum = 1
    }

    let url = 'https://api.graciebell.art/api/posts'
    let params = [
      `filters[media_type][$eq]=art`, // filter only art
      `sort=date:desc`, // sort by descending date
      `pagination[page]=${pageNum}`, // page number
      `pagination[pageSize]=${pagination.pageSize}`, // posts per page
      `pagination[withCount]=false`, // don't need the pagination metadata again
      `populate[0]=thumbnail`, // get the thumbnail
      `populate[1]=media_file` // get the actual image
    ]
    let res = await fetch(`${url}?${params.join('&')}`).then(r => r.json())
    posts = res.data
  }

  function changePageBy(n) {
    pageNum = constrain(pageNum + n, 1, lastPage)
    $page.url.searchParams.set('page', pageNum)
    goto($page.url.toString())
    getPosts()
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
        <button
          title={post.attributes.title}
          on:click={() => mediaModal.openModal(post)}>
          <Image
            src='https://api.graciebell.art{
              post.attributes.thumbnail.data.
              attributes.formats.thumbnail.url
            }'
            style='border-radius: var(--rounded-2); width: 100%;'
            alt=''
          />
        </button>
      {/each}
    </div>
  </Dfs.Section>
</Dfs.Page>


<style lang='postcss'>
  .gallery {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: var(--half-margin);
  }

  button {
    display: flex;

    transition: 0.06s transform;
    &:hover {
      transform: scale(1.06);
    }
    &:active {
      transform: scale(1);
    }
  }


  @media only screen and (max-width: token(breakpoints.s)) {
    .gallery {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
