<script>
  export let id = ''
  export let heading = ''
  export let bg = 'none'
  export let topBorder = 'none'
  export let bottomBorder = 'none'
  export let headingColor = 'black'
  export let simple = false
  export let spacing = 'normal'
  export let noHeadingBorder = false
</script>


<section
  {id}
  class="bg-{bg} top-border-{topBorder} bottom-border-{bottomBorder}"
  class:simple
  class:no-heading='{!heading}'>
  <div class="section-contents">
    {#if heading}
      <h2 class="section-heading {headingColor} {noHeadingBorder ? '' : 'headingBorder'}"><span>{heading}</span></h2>
    {/if}
    <div class="section-body spacing-{spacing}"><slot></slot></div>
  </div>
</section>


<style lang="postcss">
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
    padding-bottom: calc(var(--margin) * 3);

    &.simple {
      //padding: var(--double-margin) 0;
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

    &.bottom-border- {
      &clouds {

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

    &.headingBorder {
        &:before, &:after {
        -webkit-mask-image: url('/images/borders/blue_dot.svg');
        -webkit-mask-size: contain;
        -webkit-mask-position: center;
        -webkit-mask-size: 10px;
        -webkit-mask-repeat: space no-repeat;
        /* 'space' produced buggy results on chrome for linux */
        /* I found an article about maybe using an svg line instead, in bookmarks */

        mask-image: url('/images/borders/blue_dot.svg');
        mask-size: contain;
        mask-position: center;
        mask-size: 10px;
        mask-repeat: space no-repeat;

        width: 50%;
        content: ' ';
      }
    }
    


    & > span {
      white-space: nowrap;
      padding: 0 9px;
    }
  }

  .section-contents {
    padding: 0 var(--margin);
    margin: auto;
    width: calc(var(--m) - var(--double-margin));
  }

  section {
    .section-body.spacing- {
      &normal {
        & :global(>*) { margin-top: var(--margin) }
      }
      &double {
        & :global(>*) { margin-top: var(--double-margin) }
      }
    }

    &.no-heading {
      .section-body :global(>*:first-child) {
        margin-top: 0;
      }
    }
  }


  @media only screen and (max-width: token(breakpoints.m)) {
    .section-contents {
      width: calc(var(--s) - var(--double-margin));
    }
  }

  @media only screen and (max-width: token(breakpoints.s)) {
    section {
      padding: calc(var(--margin) * 3) 0;
    }

    .section-contents {
      width: calc(var(--ss) - var(--double-margin));
    }
  }

  @media only screen and (max-width: token(breakpoints.ss)) {
    section {
      padding: var(--margin) 0;
    }

    .section-contents {
      width: auto;
    }
  }
</style>
