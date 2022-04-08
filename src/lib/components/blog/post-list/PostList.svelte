<script>
  import { onMount } from 'svelte'
  import PageHandler from '$lib/pagination.js'
  import PageControls from '$lib/components/controls/PageControls.svelte'
  import { page } from '$app/stores'
  import Row from './Row.svelte'
  import Button from '$lib/components/controls/Button.svelte'


  let pageHandler
  let isLoading = true
  let posts = []
  let pageNum = 1
  let lastPage = 1

  function tag(n, t) {
    return {
      dbName : n,
      title  : t
    }
  }

  let tags = [
    tag('all', 'All'),
    tag('blog', 'Blogs'),
    tag('art', 'Art'),
    tag('video', 'Videos'),
    tag('music', 'Music')
  ]
  let activeTagIdx = 1
  let inactiveStyle = {
    bg : 'blue',
    color : 'white'
  }
  let activeStyle = {
    bg : 'white',
    color : 'blue',
    outline : 'blue'
  }

  onMount(async () => {
    let url = '/api/grabble/get/count'
    let params = $page.url.searchParams

    let tagIdx = activeTagIdx
    if (params.has('category')) {
      tagIdx = params.get('category')
      activeTagIdx = tagIdx
    }
    if (tagIdx != 0) {
      url = `${url}?type=${tags[tagIdx].dbName}`
    }

    let response = await fetch(url)
    let postCount = await response.json()
    pageHandler = new PageHandler(postCount, 8, $page)

    lastPage = pageHandler.lastPage
    getPosts()
    isLoading = false
  })

  async function getPosts() {
    pageNum = pageHandler.pageNum
    let queryString = `?max=${pageHandler.pageMax}&min=${pageHandler.pageMin}`
    if (activeTagIdx != 0) {
      queryString = `${queryString}&type=${tags[activeTagIdx].dbName}`
    }
    let response = await fetch(`/api/grabble/get${queryString}`)
    posts = await response.json()
  }

  function changePageBy(n) {
    pageHandler.changePageBy(n)
    getPosts()
  }
</script>


<div class='layout'>
  <!-- <div class='tags'>
    {#each tags as tag, i}
      <a href='/blog?category={i}' rel='external'>
        <Button {...(tags[activeTagIdx].title == tag.title) ? activeStyle : inactiveStyle}>{tag.title}</Button>
      </a>
    {/each}
  </div> -->
  <div class='post-list {isLoading ? "hide" : ""}'>
    {#if posts.length > 0}
      {#each posts as post}
        <Row {post} />
      {/each}
    {:else}
      <p>There's nothing to see here.</p>
    {/if}
  </div>
  <PageControls
    pageNum={pageNum}
    lastPage={lastPage}
    on:next={() => changePageBy(1)}
    on:prev={() => changePageBy(-1)}
  />
</div>

<style lang='scss'>
  @import 'src/styles/breakpoints.scss';
  @import 'src/styles/spacing.scss';

  .layout {
    display: grid;
    grid-gap: $margin;


    border: 4px solid var(--black);
    border-radius: 20px;
    padding: $margin;
    //width: min-content;
    margin: auto;
    background: white;
  }

  .tags {
    display: flex;
    &>* {
      margin-right: 6px;
    }
  }

  .post-list {
    transition: 0.25s opacity;
    &.hide {
      opacity: 0;
    }

    display: grid;
    grid-row-gap: $half-margin;
    //width: 500px;
  }

</style>
