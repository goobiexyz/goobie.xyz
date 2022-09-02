<script>
  export let postList

  import PostSummary from './PostSummary.svelte'
  import ScrollBox from '../../layout/ScrollBox.svelte'
  import SpacedDiv from '$lib/components/layout/SpacedDiv.svelte'
  import { createEventDispatcher } from 'svelte'

  let dispatch = createEventDispatcher()
</script>


<div class='wrapper'>
  <ScrollBox>
    <SpacedDiv>
      {#each postList as post}
        {#if post.type == 'art'}
          <button on:click={ () => dispatch( 'postClick', { post } ) }>
            <PostSummary {post} />
          </button>
        {:else if post.type == 'comic'}
          <a href={post.href}><PostSummary {post} /></a>
        {/if}
        <hr />
      {/each}
    </SpacedDiv>
  </ScrollBox>
</div>


<style lang='postcss'>
  hr {
    border: none;
    border-top: 1px white dashed;

    &:last-child {
      display: none;
    }
  }

  button, a {
    display: block;
    text-decoration: none;
    width: 100%;
    text-align: left;

    transition: 0.1s transform;

    &:hover {
      transform: scale(1.03);
    }
    &:active {
      transform: scale(1);
    }
  }

  @media only screen and (max-width: token(breakpoints.s)) {
    /* shrinkwraps and centers the scroll box on mobile */
    .wrapper {
      width: min-content;
      margin: auto;
    }
  }
</style>
