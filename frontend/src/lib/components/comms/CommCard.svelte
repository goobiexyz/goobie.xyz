<script>
  export let thumb
  export let name
  export let price
  export let notes
</script>


<div class='comm-card'>
  <img src={thumb} alt='' />
  <div class='info'>
    <h4>{name}</h4>
    <span class='price'>{price}</span>
    {#if notes}<span class='notes'>{notes}</span>{/if}
  </div>
</div>


<style lang='scss'>
  @import 'src/styles/spacing.scss';

  .comm-card {
    width: min-content;
    //height: 308px;
  }
  img {
    display: block;
    width: 200px;
    border-radius: 20px;
  }
  .info>* {
    margin-top: $half-margin;
  }
  .notes {
    display: block;
    font-size: small;
  }
  h4 {
    color: var(--dark-pink);
  }
</style>
