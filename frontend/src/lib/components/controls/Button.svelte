<script>
  export let color = 'var(--dark-blue)'
  export let background = 'white'
  export let border = '0'
  export let borderColor = 'none'
  export let id = ''
  export let size = 'small'
  export let rounded = 'var(--rounded-2)'
</script>


<button
  {id}
  on:click
  class={size}
  style={
    `color: ${color};`+
    `background: ${background};`+
    `border: ${border} ${borderColor} solid;`+
    `border-radius: ${rounded};`
    }>
  <slot></slot>
</button>


<style lang='postcss'>
  @import '../../../styles/hover-grow.css';

  button {
    @mixin hover-grow 1.15;

    padding: 3px 12px 5px;
    font-weight: bold;
  }

  .big {
    font-size: 1.2rem;
    padding: 5px 25px 7px 25px;
  }
</style>
