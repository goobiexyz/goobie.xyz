<script>
  export let data

  import * as Dfs from '$lib/defaults.js'
  import HomeHeader from "$lib/components/home/header/HomeHeader.svelte"
  import FlexCols from '$lib/components/layout/FlexCols.svelte'
  import Image from '$lib/components/media/Image.svelte'
  import LatestPosts from '$lib/components/home/latest-posts/LatestPosts.svelte'
  import MediaModal from '$lib/components/posts/media-modal/MediaModal.svelte'
  import SpacedDiv from '$lib/components/layout/SpacedDiv.svelte'
    import Button from '$lib/components/controls/Button.svelte';

  let mediaModal
  function openModal(event) {
    mediaModal.openModal(event.detail.post)
  }

</script>


<MediaModal bind:this={mediaModal} />
<HomeHeader />
<Dfs.Page header={false}>
  <Dfs.Section id="about" heading="Meet Grace" headingColor="blue">
    <FlexCols>
      <div class='col-1'>
        <div>
          <Image
            src='/images/grace_portrait_casual.jpg'
            style='max-width:13.66rem; border-radius:var(--rounded-2);'
            alt=''>
          </Image>
        </div>
      </div>
      <div class='col-2'>
        <SpacedDiv>
          <p>
            Hi there! My name is Grace and I call myself a multimedia artist because I'm always looking to challenge myself, try new things, and apply skills I learn in one medium to other mediums. My skills include design, illustration, coding, composing, and video editing.
          </p>
          <p>
            I'm currently taking commissions for character art and graphic design. <a href='comms'>Click here for more information</a>. And don't hesitate to contact me about any other ideas and projects you may have. I have a wide range of skills that I love to apply wherever I can!
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
    topBorder='clouds'
    bottomBorder='clouds'>
    <LatestPosts postList={data.latestPosts} on:postClick={openModal} />
  </Dfs.Section>

  <Dfs.Section
    id='discord'
    heading="Discord Server">
    <FlexCols>
      <div class='col-1'>
        <div>
          <Image
            src='/images/camp_gracie.jpg'
            style='max-width:260px; border-radius:var(--rounded-2);'
            alt=''>
          </Image>
        </div>
      </div>
      <div class='col-2'>
        <SpacedDiv>
          <p>
            The official summer camp for Gracie Bell fans! Join for an awesome community of nice people and to talk with me about movies, games, and art. Even get exclusive WIPs and secret arts that you might not see on my socials. Join the voice calls for interesting conversations, games, watch-alongs, and to watch me draw.
          </p>
          <p>
            <a href="https://discord.com/invite/c7hXSMB" target="_blank"><Button background="var(--pink)" color="white" size="big">Join now!</Button></a>
          </p>
        </SpacedDiv>
      </div>
    </FlexCols>
    
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
    display: flex;
    align-items: center;
  }

  @media only screen and (max-width: token(breakpoints.ss)) {
    .col-2 {
      min-width: 100%;
    }
  }
</style>
