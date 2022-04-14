<script>
  export let pageNum
  export let lastPage

  import { createEventDispatcher } from 'svelte'
  let dispatch = createEventDispatcher()
  import IconButton from './IconButton.svelte'
</script>


<div class='page-controls'>
  <IconButton
    type='left-arrow'
    size='big'
    color='dark-blue'
    on:click={() => dispatch('prev')} />
  <span class='page-number'>{pageNum} of {lastPage}</span>
  <IconButton
    type='right-arrow'
    size='big'
    color='dark-blue'
    on:click={() => dispatch('next')} />
</div>


<style lang='postcss'>
  .page-controls {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .page-number {
    margin: 0 var(--margin);
    font-size: 1.2rem;
    width: 100px;
    text-align: center;
  }
</style>
