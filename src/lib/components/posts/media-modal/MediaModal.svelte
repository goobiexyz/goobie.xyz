<script>
  import Image from '../../media/Image.svelte'
  import BlogPost from '../BlogPost.svelte'
  import ModalContent from './ModalContent.svelte'
  import IconButton from '../../controls/IconButton.svelte'
  import { onMount } from 'svelte'
  import convertDate from '$lib/convert-date.js'
  import { fly } from 'svelte/transition'

  let modal

  let open = false
  let loaded = false
  let showControls = true

  let post = {}
  let mediaType
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
    mediaType = post.attributes.media_type
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
  {#if open}
    {#if showControls}
    <div
      class='modal-controls'
      class:hide={!showControls}
      transition:fly={{ y: 50 }}>
      <IconButton
        type='back-circle'
        title='Back'
        size='big'
        on:click={closeModal}
      />
    </div>
    {/if}

    {#if mediaType === 'art' && showControls}
      <div
        class='modal-caption'
        class:hide={!showControls}
        on:click={toggleControls}
        transition:fly={{ y: -50 }}>
        <div class='modal-caption-interior'>
          <span class='modal-title'>{post.attributes.title}</span>
          <time class='date' datetime={post.attributes.date}>
            {convertDate(post.attributes.date)}
          </time>
          <p class='desc'>{post.attributes.description}</p>
        </div>
      </div>
    {/if}

    {#if !loaded}
      <img
        class='loading-icon'
        src='/images/icons/loading.svg'
        alt='Loading'
      />
    {/if}

    <div class='modal-body'>
      <ModalContent
        {post}
        on:click={toggleControls}
        on:load={hideLoadingIcon}
      />
      <div class='out-click-zone' on:click={closeModal}></div>
    </div>
  {/if}
</div>


<style lang='postcss'>
  /* The root container */
  .modal {
    position: fixed;
    z-index: 100;

    width: 100vw;
    height: 100vh;
    max-height: -moz-available;
    height: -webkit-fill-available;

    background: rgba(0, 0, 0, 0.85);

    /* transition */
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.5s;
    &.open {
      opacity: 1;
      pointer-events: auto;
    }
  }


  /* the container for the contents */
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


  /* Loading icon */
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
  }



  /* trigger to close the modal */
  .out-click-zone {
    position: absolute;
    height: 100vh;
    max-height: -moz-available;
    height: -webkit-fill-available;
    width: 100vw;
    z-index: 125;
  }


  /* The overlays */
  .modal-controls, .modal-caption {
    position: absolute;
    z-index: 200;
  }

  .modal-controls {
    bottom: var(--margin);
    left: var(--margin);
  }

  .modal-caption {
    top: 0;

    width: 100%;
    padding: var(--margin);

    display: flex;
    justify-content: space-evenly;

    background: rgba(0, 0, 0, 0.85);
    color: white;
  }


  /* caption interior */
  .modal-caption-interior {
    max-width: var(--s);
  }

  .modal-title {
    font-family: 'urbane-bold';
    font-size: 1.4rem;
    display: block;
  }

  .date {
    display: block;
    font-family: monospace;
    margin-top: 6px;
    font-size: 0.9rem;
  }

  .desc {
    margin-top: var(--half-margin);
  }

</style>
