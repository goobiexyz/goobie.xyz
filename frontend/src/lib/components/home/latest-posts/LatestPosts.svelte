<script>
  export let style = 'big'

  import { onMount } from 'svelte'
  import PostSummary from './PostSummary.svelte'
  import ScrollBox from '../../layout/ScrollBox.svelte'
  import { createEventDispatcher } from 'svelte'
  let dispatch = createEventDispatcher()

  let isLoading = true
  let posts = []
  onMount(async () => {
    await fetch('https://api.graciebell.art/api/posts?sort=date:desc&populate[0]=thumbnail&populate[1]=media_file&pagination[limit]=5').then((res) => { // get max 5
      res.json().then((json) => {
        posts = json.data
        isLoading = false
      })
    })
  })
</script>


<div class={isLoading ? "hide" : ""}>
  <ScrollBox>
    {#each posts as post}
      <button on:click={() => dispatch('postClick', { post })}><PostSummary {post} {style} /></button>
    {/each}
  </ScrollBox>
</div>

<style lang='scss'>
  @import 'src/styles/breakpoints.scss';

  div {
    transition: 0.25s opacity;

    &.hide {
      opacity: 0;
    }
  }



  button {
    width: 100%;
    text-align: left;

    transition: 0.1s transform;

    &:hover {
      transform: scale(1.05);
    }
    &:active {
      transform: scale(1);
    }
  }

  @media only screen and (max-width: $s) {
    button {
      &:hover, &:active {
        transform: scale(0.95);
      }
    }
  }
</style>
