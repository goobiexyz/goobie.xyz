<script>
  import convertDate from '$lib/convert-date.js'
  import Image from '$lib/components/media/Image.svelte'
  import Box from '$lib/components/Box.svelte'
  import breakpoints from '$lib/data/breakpoints.json'
  import FlexCols from '$lib/components/layout/FlexCols.svelte'
  import truncateString from '$lib/truncate-string.ts'

  export let post
  if (post.type == 'comic') {
    console.log(post.attributes.comic.data.attributes.type)
  }
  let isMultiVolumeComic = post.type == 'comic' && post.attributes.comic.data.attributes.type == 'multi_volume'

  let thumbnailUrl = 'https://api.graciebell.art'+post.thumbnailUrl
  let isThumbnailLoaded = false
</script>


<svelte:head>
  <link rel='preload' as='image' href={thumbnailUrl} />
</svelte:head>


<Box
  tag='article'
  style='color: white; background: none; border-radius: 0;'>
  <FlexCols>
    <div class='col-1'>
      <Image
        src={thumbnailUrl}
        alt=''
        style='border-radius: var(--rounded-2);'
      />
    </div>

    <div class='col-2'>

      <span class='content-type'>
        {post.type}
      </span>

      {#if isMultiVolumeComic}
        <p class='comic-title'>
          {post.attributes.comic.data.attributes.title}
        </p>
      {/if}

      <h3>
        {#if isMultiVolumeComic}
          Ch. {post.attributes.chapter_number} -
        {/if}
        {post.title}
      </h3>
      <time>{convertDate(post.date)}</time>
      <p class='description'>{truncateString(post.desc, 125)}</p>

    </div>
  </FlexCols>
</Box>



<style lang='postcss'>
    .col-1, .col-2 {
      display: block;
    }

    .col-2 {
      flex: 1;
    }

    .content-type {
      display: block;

      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 4px;
      font-weight: bold;
    }

    .comic-title {
      font-size: 1.2rem;
      margin-top: 0.3rem;
      height: 1.5rem;
    }

    h3 {
      font-family: 'urbane-bold';
      font-size: 1.25rem;
    }

    time {
      margin-top: 2px;
      display: block;
      font-family: monospace;
      font-size: 0.9rem;
    }

    .description {
      margin-top: var(--margin);
    }


  @media only screen and (max-width: token(breakpoints.s)) {
    .col-1 {
      & :global(img) {
        width: 200px;
      }
    }
  }
</style>
