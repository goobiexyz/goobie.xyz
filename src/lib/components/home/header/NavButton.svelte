<script>
  export let icon
  export let href
  export let hidden = false

  export function hide() { hidden = true }
  export function show() { hidden = false }
</script>


{#if href}
<a
  on:click
  class="nav-button {icon}"
  class:hidden
  {href}>
  <span><slot /></span>
</a>
{:else}
<button
  on:click
  class="nav-button {icon}"
  class:hidden>
  <span><slot /></span>
</button>
{/if}


<style lang="postcss">
  @import "../../../../styles/hover-grow.css";

  $bgroup-col: 76px;
  $bgroup-gap: 3rem;

  a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
  }

  .nav-button {
    @mixin hover-grow;
    box-sizing: content-box;
    display: block;
    position: relative;
    border: 0.4rem white solid;
    border-radius: 1rem;
    width: 4rem;
    height: 4rem;

    background: 0;
    background-position: center;
    background-repeat: no-repeat;
    text-align: center;
    transition: transform 0.25s, opacity 0.25s;
    text-decoration: none;


    &.hidden {
      transform: perspective(500px) rotateX(90deg);
      perspective: 500px;

      opacity: 0;
      pointer-events: none;
      z-index: -1;
    }

    span {
      display: inline-block;

      line-height: 4rem;
      white-space: nowrap;
      color: white;
      font-family: 'urbane';
      font-weight: 600;

      transform: translateY(3.5rem);

      /* This fixed safari clipping it when in a button tag for some reason */
      position: relative;
    }

    &.work {
      background-image: url("/images/icons/b_star.svg");
    }
    &.comms {
      background-image: url("/images/icons/b_money.svg");
    }
    &.contact {
      background-image: url("/images/icons/b_at.svg");
    }
    &.image {
      background-image: url("/images/icons/b_brush.svg");
    }
    &.design {
      background-image: url("/images/icons/b_shapes.svg");
    }
    &.music {
      background-image: url("/images/icons/b_music.svg");
    }
    &.code {
      background-image: url("/images/icons/b_code.svg");
    }
    &.video {
      background-image: url("/images/icons/b_video.svg");
    }
    &.comics {
      background-image: url("/images/icons/b_book.svg");
    }
    &.close {
      background-image: url("/images/icons/b_close.svg");
      border: none;
    }
    &.back {
      background-image: url("/images/icons/b_line_arrow.svg");
      border: none;
      position: absolute;
      left: calc(-1 * $bgroup-gap - $bgroup-col);
    }
  }

  @media only screen and (min-width: calc(token(breakpoints.ss) + 1px)) {
    .nav-button::before {
      content: "";
      margin-left: -100%;
    }

    .nav-button::after {
      content: "";
      margin-right: -100%;
    }
  }


  @media only screen and (max-width: token(breakpoints.ss)) {
    .nav-button {
      width: 3rem;
      height: 3rem;
      text-align: left;
      font-size: 1.5rem;
      border: none;
      text-decoration: underline;

      &.back {
        position: static;
      }

      span {
        text-indent: 4rem;
        height: min-content;
        line-height: 3rem;
        transform: none;
      }
    }
  }
</style>
