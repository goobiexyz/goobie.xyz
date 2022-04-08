<script>
  import { onMount, createEventDispatcher } from 'svelte'
  let dispatch = createEventDispatcher()

  export let meta

  let wavesurfer
  let isPaused = true
  let isLoading = true
  let cover = '/api'+meta.thumbnail.data.attributes.url

  function initWavesurfer() {
    wavesurfer = window.WaveSurfer.create({
      container: '#waveform',
      waveColor: '#adadad',
      progressColor: '#e976bd',
      cursorColor: '#351f3d',
      barWidth: 4,
      barRadius: 4,
      cursorWidth: 2,
      height: 50,
      barGap: 3
    })

    wavesurfer.on('ready', () => {
      dispatch('load')
      isLoading = false
    })

    wavesurfer.load('/api'+meta.media_file.data.attributes.url)
  }


  function togglePlay() {
    wavesurfer.playPause()
    isPaused = !isPaused
  }
</script>


<svelte:head>
  <script src='https://unpkg.com/wavesurfer.js' on:load={initWavesurfer}></script>
</svelte:head>



<div class='card {isLoading ? "hide" : ""}'>
  <img class='cover' src={cover} alt='' />
  <button on:click={togglePlay}>Play</button>
  <div id="waveform"></div>
</div>


<style lang='scss'>
  @import 'src/styles/spacing.scss';
  @import 'src/styles/breakpoints.scss';

  .card {
    background: white;
    border-radius: 20px;
    padding: $half-margin;
    width: $sss;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 50px 1fr;
    grid-template-rows: auto auto;
    grid-row-gap: $half-margin;

    transition: 0.25s opacity;

    &.hide {
      opacity: 0;
    }
  }

  .cover {
    grid-column: span 2;
    width: 100%;
    background: red;
    border-radius: 10px;
  }
</style>
