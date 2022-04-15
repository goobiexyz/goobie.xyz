<script>
  import IconLink from '../controls/IconLink.svelte'

  let color = 'white'
</script>


<footer>
  <IconLink type='twitter' {color} />
  <IconLink type='youtube' {color} />
  <IconLink type='soundcloud' {color} />
  <IconLink type='github' {color} />
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
