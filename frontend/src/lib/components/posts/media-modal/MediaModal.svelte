<script>
  import Image from '../../media/Image.svelte'
  import BlogPost from '../BlogPost.svelte'
  import ModalContent from './ModalContent.svelte'
  import IconButton from '../../controls/IconButton.svelte'
  import { onMount } from 'svelte'
  import convertDate from '$lib/convert-date.js'

  let modal
  let open = false
  let loaded = false
  let showControls = true
  let post = {}
  let body

  onMount(() => {
    body = document.querySelector('body')
  })

  function hideLoadingIcon() {
    loaded = true
  }

  function toggleControls() {
    showControls = !showControls
  }

  export function openModal(p) {
    setHeight()
    open = true
    showControls = true
    loaded = false
    post = p
    body.style.overflow = "hidden"
  }

  export function closeModal() {
    open = false
    body.style.overflow = "auto"
  }


  function setHeight() {
    modal.style.minHeight = window.innerHeight + "px"
  }
</script>

<svelte:window on:resize={setHeight} />


<div class='modal' class:open bind:this={modal}>
  <div class='modal-controls {showControls ? "" : "hide"}' >
    <IconButton type='back-circle' title='Back' size='big' on:click={closeModal}/>
  </div>

  {#if open}
    {#if post.attributes.media_type == 'art'}
      <div class='modal-caption {showControls ? "" : "hide"}' on:click={toggleControls}>
        <div class='modal-caption-interior'>
          <span class='modal-title'>{post.attributes.title}</span>
          <time datetime={post.attributes.date}>{convertDate(post.attributes.date)}</time>
          <p class='desc'>{post.attributes.description}</p>
        </div>
      </div>
    {/if}
  {/if}

  <img class='loading-icon' class:loaded src='/images/icons/loading.svg' alt='Loading' />

  <div class='modal-body'>
    {#if open}
      <ModalContent
        {post}
        on:click={toggleControls}
        on:load={hideLoadingIcon}
      />
    {/if}
    <div class='out-click-zone' on:click={closeModal}></div>
  </div>
</div>


<style lang='postcss'>
  .modal {
    position: fixed;
    width: 100vw;
    height: 100vh;
    max-height: -moz-available;
    height: -webkit-fill-available;
    background: rgba(0, 0, 0, 0.85);

    z-index: 100;

    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s;

    &.open {
      opacity: 1;
      pointer-events: auto;
    }
  }

  .modal-controls, .modal-caption {
    z-index: 200;
    opacity: 1;
    transition: 0.1s opacity;

    &.hide {
      opacity: 0;
      pointer-events: none;
    }
  }


  .modal-controls {
    position: absolute;
    bottom: var(--margin);
    left: var(--margin);
  }


  .modal-caption {
    display: flex;
    justify-content: space-evenly;

    position: absolute;
    top: 0;
    background: rgba(0, 0, 0, 0.85);
    width: 100%;
    padding: var(--margin);
    color: white;

    .modal-title {
      font-family: 'urbane-bold';
      font-size: 1.4rem;
      display: block;
    }

    time {
      display: block;
      font-family: monospace;
      margin-top: 6px;
      font-size: 0.9rem;
    }

    .desc {
      margin-top: var(--half-margin);
    }
  }


  .modal-caption-interior {
    max-width: var(--s);
  }


  .modal-body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;

    & :global(>*) {
      margin: var(--margin);
      z-index: 150;
    }
  }


  @keyframes loading-icon-spin {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }

  .loading-icon {
    z-index: 300;
    width: 4rem;
    height: 4rem;

    pointer-events: none;

    position: fixed;
    left: 50%;
    top: 50%;
    margin-top: -2rem;
    margin-left: -2rem;

    animation: loading-icon-spin 2s linear infinite;

    opacity: 1;
    transition: opacity 0.1s;

    &.loaded {
      opacity: 0;
    }
  }

  .out-click-zone {
    position: absolute;
    height: 100vh;
    max-height: -moz-available;
    height: -webkit-fill-available;
    width: 100vw;
    z-index: 125;
  }
</style>
