<script>
  import Image from '../../media/Image.svelte'
  import BlogPost from '../BlogPost.svelte'
  import VideoCard from '../VideoCard.svelte'
  import MusicCard from '../MusicCard.svelte'

  export let post

  let type = post.attributes.media_type
  let artImage

  if (type === 'art') {
    let large = post.attributes.media_file.data.attributes.formats.large
    if (large) {
      artImage = large.url
    } else {
      artImage = post.attributes.media_file.data.attributes.url
    }
  }
</script>


<div class='content' on:click>
  {#if type == 'art'}
    <Image src='https://api.graciebell.art{artImage}' on:load style='max-width: 100%; max-height: calc(100vh - 2 * var(--margin));' />

  {:else if type == 'blog'}
    <BlogPost meta={post.attributes} on:load />

  {:else if type == 'video'}
    <VideoCard videoID={post.attributes.video_id} on:load />

  {:else if type == 'music'}
    <MusicCard meta={post.attributes} on:load />
  {/if}
</div>


<style>
  .content {
    display: inline-block;
  }
</style>
