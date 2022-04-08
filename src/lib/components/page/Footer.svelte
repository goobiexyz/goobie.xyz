<script>
  import IconLink from '../controls/IconLink.svelte'
</script>


<footer>
  <IconLink type='twitter' />
  <IconLink type='youtube' />
  <IconLink type='soundcloud' />
  <IconLink type='github' />
</footer>

<style lang='scss'>
  @import 'src/styles/spacing.scss';

  footer {
    display: flex;
    justify-content: center;
    padding: $margin;


    position: absolute;
    bottom: 0;
    width: 100%;

    background-color: var(--black);

    & :global(>*) {
      margin: 0 $half-margin;
    }
  }
</style>
