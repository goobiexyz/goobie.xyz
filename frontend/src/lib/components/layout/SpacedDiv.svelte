<script>
  export let style = ''
  export let spacing = 'single'
</script>


<div class={spacing} {style}><slot /></div>


<style lang='postcss'>
  div.single :global(>*:not(:first-child)) {
    margin-top: var(--margin);
  }

  div.half :global(>*:not(:first-child)) {
    margin-top: var(--half-margin);
  }

  div.double :global(>*:not(:first-child)) {
    margin-top: var(--double);
  }
</style>
