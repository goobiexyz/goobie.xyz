<script>
  import convertDate from '$lib/convert-date.js'
  import Image from '$lib/components/media/Image.svelte'
  import Box from '$lib/components/Box.svelte'
  import breakpoints from '$lib/data/breakpoints.json'

  export let post
  let thumbnail = 'https://api.graciebell.art'+post.attributes.thumbnail.data.attributes.formats.thumbnail.url
  let type = post.attributes.media_type
  let title = post.attributes.title
  let date = post.attributes.date
  let desc = post.attributes.description

  let bp_s = parseInt(breakpoints.s)
  let innerWidth // bound to window.innerWidth
  $: isMaxWidthS = innerWidth <= bp_s
</script>


<svelte:window bind:innerWidth={innerWidth} />


<Box
  tag='article'
  style='color: white; background: none; border-radius: 0;'>
  <div class='columns'>
    <div class='col-1'>
      <Image src={thumbnail} alt='' style='border-radius: var(--rounded-2);'/>
    </div>

    <div class='col-2'>
      <span class='content-type'>{type}</span>
      <h3>{title}</h3>
      <time>{convertDate(date)}</time>
      <p class='description'>{desc}</p>
    </div>
  </div>
</Box>



<style lang='scss'>
  @import 'src/styles/breakpoints.scss';
  @import 'src/styles/spacing.scss';

  .columns {
    display: grid;
    grid-template-columns: max-content auto;
    grid-gap: var(--half-margin);

    .content-type {
      display: block;

      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 4px;
      font-weight: bold;
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
  }


  @media only screen and (max-width: $s) {
    .columns {
      justify-content: space-evenly;
      grid-template-columns: min-content;

      & :global(img) {
        width: 200px;
      }
    }
  }


  @media only screen and (max-width: $ss) {

  }
</style>
