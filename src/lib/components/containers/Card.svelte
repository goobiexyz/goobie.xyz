<script>
</script>
  

<div>
    <slot />
</div>


<style lang="postcss">
    div {
        background: white;
        border-radius: 1em;
        padding: 2em;
    }

    @media only screen and (max-width: token(breakpoints.ss)) {
    div {
        padding: 1em;
    }
  }
</style>
  