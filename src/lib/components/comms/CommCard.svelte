<script>
  import Image from '$lib/components/media/Image.svelte'

  export let thumb
  export let name
  export let price
  export let notes
</script>


<div class='comm-card'>
  <Image
    src={thumb}
    alt=''
    style='display:block; width:200px; border-radius:var(--rounded-3);'
  />
  <div class='info'>
    <h4>{name}</h4>
    <span class='price'>{price}</span>
    {#if notes}<span class='notes'>{notes}</span>{/if}
  </div>
</div>


<style lang='postcss'>
  .comm-card {
    width: min-content;
  }
  .info>* {
    margin-top: var(--half-margin);
  }
  .notes {
    display: block;
    font-size: small;
  }
  h4 {
    color: var(--dark-pink);
  }
</style>
