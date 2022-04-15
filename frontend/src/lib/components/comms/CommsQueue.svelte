<script>
  import { fade, slide } from 'svelte/transition'
  import commsData from '$lib/data/comms-data.json'
  import ScrollBox from '../layout/ScrollBox.svelte'
</script>


<div class='queue-container'>
  <ScrollBox accent='var(--black)' height='320px' border='var(--border-thin)'>
    {#await fetch(commsData.queueUrl).then(res => res.json())}
      <p>Loading...</p>
    {:then queue}
      {#each queue as comm}
        <div class='queue-item' in:slide>
          <span class='name'>{comm.name}</span>
          <span class='labels'>{comm.labels.map(l => l.name).join(', ')}</span>
        </div>
      {/each}
    {:catch error}
      <p>{error.message}</p>
    {/await}
  </ScrollBox>
</div>


<style lang='postcss'>
  .queue-container {
    width: 75%;
    margin: auto;
  }

  .queue-item {
    width: 100%;

    &:not(:first-child) {
      margin-top: var(--half-margin);
      border-top: 1px dashed var(--black);
      padding-top: var(--half-margin);
    }

    .name, .labels {
      display: block;
    }

    .labels {
      font-size: small;
      color: var(--dark-pink);
    }
  }

  @media only screen and (max-width: token(breakpoints.s)) {
    .queue-container {
      width: 100%;
    }
  }
</style>
