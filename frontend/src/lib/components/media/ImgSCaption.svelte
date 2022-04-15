<script>
  import Image from '$lib/components/media/Image.svelte'
  import { fade } from 'svelte/transition'

  export let src
  export let alt
  export let style

  let loaded = false
</script>



<figure>
  <Image {src} {alt} {style} on:load={() => loaded = true} />
  {#if loaded}
    <figcaption transition:fade>
      <slot />
    </figcaption>
  {/if}
</figure>



<style>
  div {
    overflow: hidden;
  }

  figcaption {
    margin-top: 6px;
    font-family: 'urbane';
    font-size: small;
    color: var(--black);
  }
</style>
