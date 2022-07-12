<script context='module'>
  import truncateString from '$lib/truncate-string.ts'

  export async function load() {
    let url = 'https://api.graciebell.art/api/posts'
    let params = [
      'sort=date:desc',
      'populate[0]=thumbnail',
      'populate[1]=media_file',
      'pagination[limit]=5'
    ]
    let res = await fetch(`${url}?${params.join('&')}`).then(r => r.json())
    return {
      props: {
        posts: res.data
      }
    }
  }
</script>


<script>
  export let posts

  import * as Dfs from '$lib/defaults.js'
  import HomeHeader from "$lib/components/home/header/HomeHeader.svelte"
  import FlexCols from '$lib/components/layout/FlexCols.svelte'
  import Image from '$lib/components/media/Image.svelte'
  import LatestPosts from '$lib/components/home/latest-posts/LatestPosts.svelte'
  import MediaModal from '$lib/components/posts/media-modal/MediaModal.svelte'
  import SpacedDiv from '$lib/components/layout/SpacedDiv.svelte'

  let mediaModal
  function openModal(event) {
    mediaModal.openModal(event.detail.post)
  }
</script>


<MediaModal bind:this={mediaModal} />
<HomeHeader />
<Dfs.Page header={false}>
  <Dfs.Section id="about" heading="Meet Gracie" headingColor="blue">
    <FlexCols>
      <div class='col-1'>
        <Image
          src='/images/grace_portrait.jpg'
          style='max-width:16rem; border-radius:var(--rounded-2);'
          alt=''>
        </Image>
      </div>
      <div class='col-2'>
        <SpacedDiv>
          <p>
            Hi there! My name is Grace and I call myself a multimedia artist because I'm always looking to challenge myself, try new things, and apply skills I learn in one medium to other mediums. My specialties include graphic design, illustration, coding, video editing, and music composition.
          </p>
          <p>
            My commissions for character art and graphic design are currently OPEN! <a href='comms'>Click here for more information</a>. And don't hesitate to contact me about any other ideas and projects you may have.
          </p>
        </SpacedDiv>
      </div>
    </FlexCols>
  </Dfs.Section>


  <Dfs.Section
    id='updates'
    heading="What's New?"
    headingColor='white'
    bg='blue-stripes'
    topBorder='clouds'>
    <LatestPosts {posts} on:postClick={openModal} />
  </Dfs.Section>
</Dfs.Page>


<style lang='postcss'>
  .col-1 {
    flex: 1 1 20%;

    display: flex;
    justify-content: space-evenly;
  }
  .col-2 {
    flex: 1 1 60%;
    min-width: 35ch;
  }

  @media only screen and (max-width: token(breakpoints.ss)) {
    .col-2 {
      min-width: 100%;
    }
  }
</style>
