<script>
  export let videoID

  let isLoading = true
</script>


<div class='card {isLoading ? "hide" : ""}'>
  <iframe
    on:load
    on:load={() => {isLoading = false}}
    src="https://www.youtube-nocookie.com/embed/{videoID}"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen>
  </iframe>
</div>


<style lang='scss'>
  @import 'src/styles/spacing.scss';
  @import 'src/styles/breakpoints.scss';

  .card {
    display: block;
    background: white;
    border-radius: 20px;
    padding: $half-margin;
    font-size: 0;
    width: calc(100vw - #{$double-margin});
    max-width: $s;

    transition: 0.5s opacity;
    &.hide {
      opacity: 0;
    }
  }

  iframe {
    border-radius: 10px;
    aspect-ratio: 16 / 9;
    width: 100%;
  }
</style>
