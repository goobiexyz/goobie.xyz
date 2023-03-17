<script>
  export let style = ''
  export let tag = 'div'
</script>

<svelte:element this={tag} class='box' {style}><slot /></svelte:element>

<style lang='postcss'>
  .box {
    background: white;
    border-radius: var(--rounded-2);
    padding: var(--half-margin)
  }
</style>
