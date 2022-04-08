<script lang='coffee'>
  import { createEventDispatcher } from 'svelte'
  dispatch = createEventDispatcher()

  export heading = ''
  export optType = 'pickone'
  export opts = [
    {
      name: ''
      price: 0
      notes: ''
      thumb: ''
    }
  ]
  export quantityData

  updateChoice = (event) -> submitOpt(opts[event.detail.index])
  submitOpt = (data) -> dispatch('optSubmit', { optData : data })
</script>


<div class='comm-calc-page'>
  <h3>{heading}</h3>
  <div class='options'>

    {#if optType == 'pickone'}
      {#each opts as data, i}
        <Choice {data} index={i} onchoice:updateChoice />

      {/each}
    {/if}

    {#if optType == 'quantity'}
      <CommOptCard {data.thumb} ></CommOptCard>
    {/if}

  </div>
</div>


<script lang='coffee'>

</script>
