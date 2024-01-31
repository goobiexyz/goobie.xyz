<script>
  import IconLink from '../controls/IconLink.svelte'

  let color = 'white'
</script>


<footer>
  <IconLink type='instagram' {color} />
  <IconLink type='newgrounds' {color} />
  <IconLink type='deviantart' {color} />
  <IconLink type='tumblr' {color} />
  <IconLink type='mastodon' {color} />
  <IconLink type='github' {color} />
  <IconLink type='youtube' {color} />
  <IconLink type='soundcloud' {color} />
  
  
  

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

  @media only screen and (max-width: token(breakpoints.ss)) {
    footer {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      align-items: center;

      & :global(>*) {
        display: flex;
        justify-content: center;
      }
    }
  }
</style>
