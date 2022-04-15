<script>
  import Box from '$lib/components/Box.svelte'

  export let accent = 'white'
  export let background = 'none'
  export let border = 'var(--border)'
  export let padding = 'var(--margin)'
  export let height = '600px'

  let borderColor
  switch (accent) {
    case 'black':
      borderColor = 'var(--black)'
      break
    default:
      borderColor = accent
  }
</script>


<Box style={
    `background: ${background};`+
    `border: ${accent} ${border} solid;`+
    `padding: 0;`
  }>
  <div
    class='scroll-box'
    style:padding
    style:height
    style='--scrollbar-color: {accent};'>
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
    scrollbar-color: var(--scrollbar-color) transparent;

    /* Webkit / Blink */
    &::-webkit-scrollbar {
      width: 6px;
    }
    &::-webkit-scrollbar-button {
      background: transparent;
      height: 3px
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar-color);
      border-radius: 9999px; /* always round */
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
  }
</style>
