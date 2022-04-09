<script>
  export let src
  export let alt = ''

  import { createEventDispatcher } from 'svelte'
  import { onMount } from 'svelte'

  let dispatch = createEventDispatcher()
  let loaded = false
  let thisImage = {}

  onMount(() => {
    thisImage.onload = () => {
      loaded = true
      dispatch('load')
    }
  })
</script>


<img {src} {alt} class:loaded bind:this={thisImage} loading="lazy"/>


<style lang='scss'>
  @import 'src/styles/spacing.scss';

  img {
    opacity: 0;
    transition: opacity 0.1s ease-out;
    display: block;
    max-width: 100%;
    max-height: calc(100vh - 2 * #{$margin});
  }
  img.loaded {
    opacity: 1;
  }
</style>
