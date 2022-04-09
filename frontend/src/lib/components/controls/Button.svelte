<script>
  export let color = 'blue'
  export let bg = 'white'
  export let outline = 'none'
  export let id = ''
  export let size = ''
</script>


<button on:click {id} class='text-{color} bg-{bg} outline-{outline} {size}'><slot></slot></button>


<style lang='scss'>
  @import 'src/styles/button.scss';
  @import 'src/styles/text-and-bg-color.scss';

  button {
    @include button;
    @include text-and-bg-color;

    color: var(--dark-blue);
    &.bg- {
      &white {
        background: white;
      }
      &blue {
        background: var(--dark-blue);
      }
    }

    &.outline- {
      &blue {
        outline: 2px var(--dark-blue) solid;
      }
    }

    background: white;
    border-radius: 6px;
    padding: 3px 6px 5px;
    font-weight: bold;
  }

  .big {
    font-size: 1.2rem;
    padding: 5px 25px 7px 25px;
  }
</style>
