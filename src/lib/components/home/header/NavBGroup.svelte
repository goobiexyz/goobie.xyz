<script>
  export let hidden = false

  export function hide() { hidden = true }
  export function show() { hidden = false }
</script>


<div class="bgroup" class:hidden>
  <slot />
</div>


<style lang="postcss">
  $bgroup-col: 76px;
  $bgroup-gap: 3rem;

  .bgroup {
    display: grid;
    position: relative;
    z-index: 0;
    justify-content: center;
    align-items: center;
    grid-template-columns: $bgroup-col $bgroup-col  $bgroup-col $bgroup-col;
    grid-column-gap: $bgroup-gap;
    grid-row-gap: $bgroup-gap;
    width: min-content;
    margin: auto;

    &.hidden {
      display: none;
      z-index: -100;
    }
  }

  @media only screen and (max-width: token(breakpoints.ss)) {
    .bgroup {
      grid-template-columns: 1fr;
      grid-row-gap: 1rem;
      margin: 0;
    }
  }
</style>
