<script>
  import IconLink from '../controls/IconLink.svelte'
</script>


<header>
  <IconLink type='logo' size='medium' color='white' />
  <h1><slot></slot></h1>
</header>


<style lang='postcss'>
  header {
    background: var(--pink);
    padding: var(--margin);
    padding-bottom: var(--half-margin);

    border-bottom: 5rem solid;
    border-image: url('/images/borders/benday_pink.svg');
    border-image-slice: 0 0 100% 0;
    border-image-repeat: repeat;
    border-image-outset: -2px;
    background-clip: padding-box;


    & :global(>a) {
      position: absolute;
    }
  }


  h1 {
    color: white;
    font-size: 2.6rem;
    text-align: center;
    font-family: 'urbane-bold';
    font-weight: normal;
  }


  @media only screen and (max-width: token(breakpoints.s)) {
    h1 {
      font-size: 2rem;
      line-height: 1.4;
    }
  }
</style>
