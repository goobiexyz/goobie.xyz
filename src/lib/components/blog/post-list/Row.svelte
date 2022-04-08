<script>
  export let post

  import { onMount } from 'svelte'
  import truncateString from '$lib/truncate-string.ts'
  import convertDate from '$lib/convert-date.js'
  import { remark } from 'remark'
  import stripMd from 'strip-markdown'

  let blogBody = ''

  onMount(async () => {
    if (post.type === 'blog') {
      let response = await fetch(`/posts/blog/${post._id}.md`)
      if (response.ok) {
        remark()
          .use(stripMd)
          .process(await response.text())
          .then((s) => {
            blogBody = truncateString(s.value, 200)
          })
      } else {
        blogBody = "404"
      }
    }
  })
</script>


<a class='row' href='/blog/post/{post._id}'>
  <img class='thumb' src='/posts/{post.type}/thumbs/{post._id}.jpg' alt='' />
  <div class='post-meta'>
    <span class='type'>{post.type}</span>
    <span class='title'>{post.title}</span>
    <time>{convertDate(post.date)}</time>
    {#if post.desc}
      <p class='description'>{post.desc}</p>
    {:else if post.type === 'blog'}
      <p class='description'>{blogBody}</p>
    {/if}
  </div>
</a>


<style lang='scss'>
  @import 'src/styles/breakpoints.scss';
  @import 'src/styles/spacing.scss';
  @import 'src/styles/remove-link-style.scss';
  @include remove-link-style;
  
  .row {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: $half-margin;

    &:not(:last-child) {
      border-bottom: 1px dashed var(--black);
      padding-bottom: $half-margin;
    }
  }

  .type {
    display: block;
    text-transform: uppercase;
    font-size: 1em;
    letter-spacing: 4px;
    font-weight: bold;
  }

  .title {
    display: block;
    font-family: 'urbane-bold';
    font-size: 1.5em;
    text-align: left;
  }

  time {
    display: block;
    margin-top: 4px;
    font-family: monospace;
    font-size: 1.1em;
  }

  .description {
    margin-top: $half-margin;
    font-size: 0.8em;
  }

  .thumb {
    width: 100%;
  }


  @media only screen and (max-width: $m) {
    .row {
      grid-template-columns: 80px 1fr;
    }

    .description {
      display: none;
    }
  }


  @media only screen and (max-width: $s) {
    .post-meta {
      font-size: 0.8rem;
    }
  }
</style>
