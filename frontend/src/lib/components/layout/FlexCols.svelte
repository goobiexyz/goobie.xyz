<script>
  export let rowGap = 'var(--margin)'
  export let colGap = 'var(--margin)'
</script>


<div class="flex-2-col" style="row-gap: {rowGap}; column-gap: {colGap};">
  <slot />
</div>


<style lang="postcss">
  .flex-2-col {
    display: flex;
    flex-wrap: wrap;
  }
</style>
