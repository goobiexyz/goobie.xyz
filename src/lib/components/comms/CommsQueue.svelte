<script>
  import { onMount } from 'svelte'
  import ScrollBox from '../layout/ScrollBox.svelte'

  let queue = []
  let isQueueVisible = false

  onMount(async () => {
    let response = await fetch('https://api.trello.com/1/lists/5f63a1e27578fe449b995c56/cards')
    queue = await response.json()
    isQueueVisible = true
  })
</script>


<div class='queue-container {isQueueVisible ? '' : 'hidden'}'>
  <ScrollBox accent='black' height='short' style='thin'>
    {#each queue as comm}
      <div class='queue-item'>
        <span class='name'>{comm.name}</span>
        <span class='labels'>{comm.labels.map(l => l.name).join(',')}</span>
      </div>
    {/each}
  </ScrollBox>
</div>


<style lang='scss'>
  @import 'src/styles/breakpoints.scss';
  @import 'src/styles/spacing.scss';

  .queue-container {
    transition: opacity 1s;
    &.hidden {
      opacity: 0;
    }
  }

  .queue-item {
    width: 400px;

    &:not(:first-child) {
      margin-top: $half-margin;
      border-top: 1px dashed var(--black);
      padding-top: $half-margin;
    }

    .name, .labels {
      display: block;
    }

    .labels {
      font-size: small;
      color: var(--dark-pink);
    }
  }

  @media only screen and (max-width: $s) {
    .queue-item {
      width: 100%;
    }
  }
</style>
