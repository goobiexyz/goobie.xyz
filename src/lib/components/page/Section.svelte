<script>
  export let id = ''
  export let heading = ''
  export let bg = 'none'
  export let topBorder = 'none'
  export let headingColor = 'black'
  export let simple = false
  export let spacing = 'normal'
</script>


<section
  {id}
  class="bg-{bg} top-border-{topBorder}"
  class:simple
  class:no-heading='{!heading}'>
  <div class="section-contents">
    {#if heading}
      <h2 class="section-heading {headingColor}"><span>{heading}</span></h2>
    {/if}
    <div class="section-body spacing-{spacing}"><slot></slot></div>
  </div>
</section>


<style lang="scss">
  @import 'src/styles/breakpoints.scss';
  @import 'src/styles/spacing.scss';

  @keyframes scroll {
    100% {
      background-position-x: -60px;
    }
  }

  @keyframes bouncy {
    50% {
      background-position-y: -80px
    }
  }


  section {
    overflow: auto;
    padding: calc(#{$margin} * 4) 0;

    &.simple {
      padding: $double-margin 0;
    }

    &.bg- {
      &blue-stripes {
        background: url('/images/backgrounds/blue_stripes.png') repeat;
        background-attachment: fixed;
        animation: 1s scroll infinite linear;
      }
      &gracie {
        background: url('/images/backgrounds/gracie-pattern.png');
        background-attachment: fixed;
        animation: 2s scroll infinite linear, 5s bouncy infinite ease-in-out;

      }
    }

    &.top-border- {
      &clouds {
        border-image-source: url('/images/borders/clouds.svg');
        border-top: 3rem solid;
        border-image-slice: 100% 0 0 0;
        border-image-repeat: repeat;
        border-image-outset: 2px;
      }
    }
  }

  .section-heading {
    font-size: 2.5rem;
    font-weight: normal;
    font-family: 'freude';
    text-align: center;

    &.blue { color: var(--dark-blue); }
    &.white { color: white; }


    display: table;
    width: 100%;

    & > span, &:before, &:after {
      display: table-cell;
    }

    &:before, &:after {

    }

    &.blue {
      &:before, &:after {
        background: var(--blue);
      }
    }

    &.white {
      &:before, &:after {
        background: white;
      }
    }

    &.black {
      &:before, &:after {
        background: var(--black);
      }
    }

    &:before, &:after {
      mask-image: url('/images/borders/blue_dot.svg');
      mask-size: contain;
      mask-position: center;
      mask-size: 10px;
      mask-repeat: space no-repeat;

      -webkit-mask-image: url('/images/borders/blue_dot.svg');
      -webkit-mask-size: contain;
      -webkit-mask-position: center;
      -webkit-mask-size: 10px;
      -webkit-mask-repeat: repeat no-repeat; // 'space' produced buggy results

      width: 50%;
      content: ' ';
    }

    & > span {
      white-space: nowrap;
      padding: 0 9px;
    }
  }

  .section-contents {
    padding: 0 $margin;
    margin: auto;
    width: calc(#{$m} - #{$double-margin});
  }

  section {
    .section-body.spacing- {
      &normal {
        & :global(>*) { margin-top: $margin }
      }
      &double {
        & :global(>*) { margin-top: $double-margin }
      }
    }

    &.no-heading {
      .section-body :global(>*:first-child) {
        margin-top: 0;
      }
    }
  }

  // section.heading {
  //   .section-body :global(>*:first-child) {
  //     margin-top: $margin;
  //   }
  // }


  @media only screen and (max-width: $m) {
    .section-contents {
      width: calc(#{$s} - #{$double-margin});
    }
  }

  @media only screen and (max-width: $s) {
    section {
      padding: calc(#{$margin} * 3) 0;
    }

    .section-contents {
      width: calc(#{$ss} - #{$double-margin});
    }
  }

  @media only screen and (max-width: $ss) {
    section {
      padding: $margin 0;
    }

    .section-contents {
      width: auto;
    }
  }
</style>
