<script>
  export let data

  import * as Dfs from '$lib/defaults.js'
  import { onMount } from 'svelte'
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import Image from '$lib/components/media/Image.svelte'
  import PageControls from '$lib/components/controls/PageControls.svelte'
  import MediaModal from '$lib/components/posts/media-modal/MediaModal.svelte'
  import constrain from '$lib/constrain.ts'

  let mediaModal

  let apiUrl = 'https://api.graciebell.art'
  let pageNum = 1
  let lastPage = data.pagination.pageCount

  let posts = []


  async function getPosts() {
    if ($page.url.searchParams.has('page')) {
      pageNum = constrain($page.url.searchParams.get('page'), 1, lastPage)
    } else {
      pageNum = 1
    }

    let url = `${apiUrl}/api/posts`
    let params = [
      `filters[media_type][$eq]=art`, // filter only art
      `sort=date:desc`, // sort by descending date
      `pagination[page]=${pageNum}`, // page number
      `pagination[pageSize]=${data.pagination.pageSize}`, // posts per page
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


  onMount(getPosts)
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
        {@const thumbnailMeta = post.attributes.thumbnail.data.attributes}
        {@const thumbnailUrl = apiUrl+thumbnailMeta.formats.thumbnail.url}
        <button
          title={post.attributes.title}
          on:click={() => mediaModal.openModal(post)}>
          <Image
            src={thumbnailUrl}
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
