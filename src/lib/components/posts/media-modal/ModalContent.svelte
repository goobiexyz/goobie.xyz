<script>
  import Image from '../../media/Image.svelte'
  import BlogPost from '../BlogPost.svelte'
  import VideoCard from '../VideoCard.svelte'
  import MusicCard from '../MusicCard.svelte'

  export let post

  let type = post.attributes.media_type
  let artImage // Can you please put the Image bit in its own component

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
    <Image src='https://api.graciebell.art{artImage}' on:load />

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
