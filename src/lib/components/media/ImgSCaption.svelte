<script>
  export let src
  export let alt
  export let width
</script>


<figure>
  <img {src} {alt} {width} />
  <figcaption><slot></slot></figcaption>
</figure>


<style>
  /* need to use a mixin to have same styling for ImgS and this one */

  img {
    border-radius: 16px;
  }

  figcaption {
    font-family: 'urbane';
    font-size: small;
    color: var(--black);
  }
</style>
