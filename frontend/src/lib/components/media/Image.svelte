<script>
  import { onMount } from 'svelte'

  export let src
  export let alt = ''
  export let style = ''
  export let lazy = false

  let loaded = false
  let ready = false

  onMount(() => { ready = true })
</script>


{#if ready}
  <img {src} {alt} {style}
    class:loaded
    loading={lazy ? 'lazy' : ''}
    on:load
    on:load={ () => loaded = true }
  />
{/if}

<style lang='scss'>
  @import 'src/styles/spacing.scss';

  img {
    display: block;

    opacity: 0;
    transition: opacity 0.1s ease-out;
    &.loaded {
      opacity: 1;
    }
  }
</style>
