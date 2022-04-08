<script>
  export let accent = 'white'
  export let height = ''
  export let style = 'card'
</script>


<div class='latest-posts {accent} style-{style}'>
<div class='scroll-box {height} {accent}'><slot></slot></div>
</div>


<style lang='scss'>
  @import 'src/styles/breakpoints.scss';
  @import 'src/styles/spacing.scss';
  @import 'src/styles/faded-scroll.scss';

  .latest-posts {
    &.style- {
      &card {
        border-radius: 16px;
        border: 6px solid white;
      }
      &thin {
        border-radius: 16px;
        border: 2px solid white;
      }
    }

    &.black {
      border-color: var(--black);
    }


    width: min-content;
    padding: 2px;
    margin-left: auto;
    margin-right: auto;
  }

  .scroll-box {
    resize: vertical;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 450px;
    &.short {
      height: 250px;
    }

    overflow-y: scroll;
    padding: $margin;
    & :global(>*):not(:first-child) {
      margin-top: $margin;
    }


    @include faded-scroll(12px, $margin);


    // Scrollbar
    /* Firefox */
    scrollbar-color: white transparent; /* foreground background */
    &.black {
      scrollbar-color: var(--black) transparent;
    }

    /* Webkit / Blink */
    &::-webkit-scrollbar-thumb {
        background-color: white;
        &.black {
          background-color: var(--black);
        }
        border-radius: 9999px; /* always round */
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
  }


  @media only screen and (max-width: $s) {
    .latest-posts {
      &.style- {
        &card {
          border: none;
          padding: 0;
          margin-top: 0;

          .scroll-box {
            margin: 0;
            padding: $margin var(--scrollbar-width) $margin 0;
          }
        }
      }
      width: auto;
    }


  }
</style>
