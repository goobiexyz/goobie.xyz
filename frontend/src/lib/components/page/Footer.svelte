<script>
  import IconLink from '../controls/IconLink.svelte'
</script>


<footer>
  <IconLink type='twitter' />
  <IconLink type='youtube' />
  <IconLink type='soundcloud' />
  <IconLink type='github' />
</footer>

<style lang='postcss'>

  footer {
    display: flex;
    justify-content: center;
    padding: var(--margin);

    height: var(--footer-height);
    position: absolute;
    bottom: 0;
    width: 100%;

    background-color: var(--black);

    & :global(>*) {
      margin: 0 var(--half-margin);
    }
  }
</style>
