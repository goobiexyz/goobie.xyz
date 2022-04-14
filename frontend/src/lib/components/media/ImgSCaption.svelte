<script>
  import Image from '$lib/components/media/Image.svelte'

  export let src
  export let alt
  export let style
</script>



<figure>
  <Image {src} {alt} {style} />
  <figcaption><slot></slot></figcaption>
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
