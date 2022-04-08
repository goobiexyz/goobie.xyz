<script lang='coffee'>
  import { createEventDispatcher } from 'svelte'
  dispatch = createEventDispatcher()
  import OptCard from './CommOptCard.svelte'

  export index = 0
  export data =
    thumb: ''
    name: ''
    price: 0
    notes: ''

  sendChoiceEvent = -> dispatch('choice', { index: index })
</script>


<button onclick:sendChoiceEvent>
  <OptCard {data.thumb} {data.name} price='${data.price}'>
    {#if data.notes}<span class='notes'>{data.notes}</span>{/if}
  </OptCard>
</button>
