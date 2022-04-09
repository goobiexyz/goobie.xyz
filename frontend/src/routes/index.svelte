<script>
  import * as Dfs from '$lib/defaults.js'
  import HomeHeader from "$lib/components/home/header/HomeHeader.svelte"
  import Flex2Col from '$lib/components/layout/Flex2Col.svelte'
  import ImgSCaption from '$lib/components/media/ImgSCaption.svelte'
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
    <Flex2Col>
      <div slot='col-1'>
        <ImgSCaption src='/images/gracie4.png' width='220px' alt=''>
          Art by <a href='https://twitter.com/ponycide'>Ponycide.</a>
        </ImgSCaption>
      </div>
      <SpacedDiv slot='col-2'>
        <p>
          Hi there! My name is Grace and I call myself a multimedia artist because I'm always looking to challenge myself, try new things, and apply skills I learn in one medium to other mediums. My specialties include graphic design, illustration, coding, video editing, and music composition.
        </p>
        <p>
          My commissions for character art and graphic design are currently OPEN! <a href='comms'>Click here for more information</a>. And don't hesitate to contact me about any other ideas and projects you may have.
        </p>
      </SpacedDiv>
    </Flex2Col>
  </Dfs.Section>


  <Dfs.Section
    id='updates'
    heading="What's New?"
    headingColor='white'
    bg='blue-stripes'
    topBorder='clouds'>
    <LatestPosts on:postClick={openModal} style='big' />
  </Dfs.Section>
</Dfs.Page>
