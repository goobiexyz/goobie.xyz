<script>
  import Box from '$lib/components/Box.svelte'

  export let accent = 'white'
  export let background = 'none'
  export let border = 'var(--border)'
  export let padding = 'var(--margin)'
  export let height = '600px'
</script>


<Box style={
    `background: ${background};`+
    `border: ${accent} ${border} solid;`+
    `padding: 0;`
  }>
  <div
    class='scroll-box {accent}'
    style={
      `padding: ${padding};`+
      `height: ${height};`
    }>
    <slot />
  </div>
</Box>


<style lang='postcss'>
  @import '../../../styles/faded-scroll.css';

  .scroll-box {
    overflow-y: scroll;
    padding: var(--margin);
    margin: 2px;
    & :global(>*):not(:first-child) {
      margin-top: var(--margin);
    }


    @mixin faded-scroll 12px, var(--margin);


    /* Scrollbar */
    /* Firefox */
    scrollbar-color: white transparent; /* foreground background */
    &.black {
      scrollbar-color: var(--black) transparent;
    }

    /* Webkit / Blink */
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-button {
      background: transparent;
      height: 3px
    }
    &::-webkit-scrollbar-thumb {
      background-color: white;
      border-radius: 9999px; /* always round */
    }
    &.black::-webkit-scrollbar-thumb {
      background-color: var(--black);
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }


  @media only screen and (max-width: token(breakpoints.s)) {

  }
</style>
