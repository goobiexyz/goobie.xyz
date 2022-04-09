<script>
  import SpacedDiv from '../layout/SpacedDiv.svelte'
  import convertDate from '$lib/convert-date.js'
  import SvelteMarkdown from 'svelte-markdown'
  import { createEventDispatcher } from 'svelte'
  let dispatch = createEventDispatcher()

  export let meta

  function sendLoadEvent() {
    dispatch('load')
  }
</script>


<article>
  <div class='article-body'>
    <SpacedDiv>
      <header>
      <h1>{meta.title}</h1>
      <time datetime={meta.date}>{convertDate(meta.date)}</time>
      </header>

      <SvelteMarkdown source={meta.blog_body} on:parsed={sendLoadEvent}/>
    </SpacedDiv>
  </div>
</article>


<style lang='scss'>
  @import 'src/styles/spacing.scss';
  @import 'src/styles/breakpoints.scss';
  @import 'src/styles/faded-scroll.scss';

  article {
    background: white;
    border-radius: 20px;

    width: $s;
    max-height: calc(100vh - 2 * #{$margin});
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .article-body {
    overflow-y: scroll;
    padding: $margin;
    @include faded-scroll(12px, $margin)
  }

  header {
    border-bottom: 1px dashed var(--black);
    padding-bottom: $half-margin;
  }

  h1 {
    font-family: 'urbane-bold';
    font-size: 1.9rem;
  }

  article :global(h2) {
    font-size: 1.25rem;
  }

  time {
    margin-top: 8px;
    font-family: monospace;
    font-size: 0.95rem;
  }


  @media only screen and (max-width: $s) {
    article {
      width: auto;
    }
  }
</style>
