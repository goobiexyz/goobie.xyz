<script>
  export let type
  export let size = ''
  export let title
  export let color = 'white'
</script>

<button class="{type} {size} {color}" {title} on:click></button>

<style lang="postcss">
  @import "../../../styles/hover-grow.css";

  button {
    @mixin hover-grow;

    display: block;
    position: relative;

    width: 2rem;
    height: 2rem;

    &.medium {
      width: 3rem;
      height: 3rem;
    }

    &.big {
      width: 4rem;
      height: 4rem;
    }

    border: none;
    padding: 0;
    margin: 0;

    -webkit-mask-size: contain;
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;

    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;

    &.white {
      background: white;
    }
    &.dark-blue {
      background: var(--dark-blue);
    }

    &.logo {
      mask-image: url('/images/icons/b_logo.svg');
      -webkit-mask-image: url('/images/icons/b_logo.svg');
    }
    &.twitter {
      mask-image: url('/images/icons/b_twitter.svg');
      -webkit-mask-image: url('/images/icons/b_twitter.svg');
    }
    &.youtube {
      mask-image: url('/images/icons/b_youtube.svg');
      -webkit-mask-image: url('/images/icons/b_youtube.svg');
    }
    &.soundcloud {
      mask-image: url('/images/icons/b_soundcloud.svg');
      -webkit-mask-image: url('/images/icons/b_soundcloud.svg');
    }
    &.github {
      mask-image: url('/images/icons/b_github.svg');
      -webkit-mask-image: url('/images/icons/b_github.svg');
    }
    &.close {
      mask-image: url('/images/icons/b_close.svg');
      -webkit-mask-image: url('/images/icons/b_close.svg');
    }
    &.right-arrow {
      mask-image: url('/images/icons/b_arrow_r.svg');
      -webkit-mask-image: url('/images/icons/b_arrow_r.svg');
    }
    &.left-arrow {
      mask-image: url('/images/icons/b_arrow_l.svg');
      -webkit-mask-image: url('/images/icons/b_arrow_l.svg');
    }
    &.back-circle {
      background: none;
      background-image: url('/images/icons/b_back_circle.svg');
    }
  }
</style>
