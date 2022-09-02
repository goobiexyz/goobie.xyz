<script>
  import { onMount } from 'svelte'
  import { lazyLoad } from '$lib/actions/lazyLoad.js'

  export let src
  export let alt = ''
  export let style = ''
  export let lazy = false

  let loaded = false
  let ready = false

  onMount(() => { ready = true })
</script>


{#if ready}
  {#if lazy}
    <img {alt} {style}
      class:loaded
      use:lazyLoad={src}
      on:load
      on:load={ () => loaded = true }
    />
  {:else}
    <img {src} {alt} {style}
      class:loaded
      on:load
      on:load={ () => loaded = true }
    />
  {/if}
{/if}

<style lang='scss'>
  @import 'src/styles/spacing.scss';

  img {
    display: block;

    opacity: 0;
    transition: opacity 0.25s ease-out;
    &.loaded {
      opacity: 1;
    }
  }
</style>
