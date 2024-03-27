<script>
  export let data

  import * as Dfs from '$lib/defaults.js'
  import HomeHeader from "$lib/components/home/header/HomeHeader.svelte"
  import FlexCols from '$lib/components/layout/FlexCols.svelte'
  import Image from '$lib/components/media/Image.svelte'
  import LatestPosts from '$lib/components/home/latest-posts/LatestPosts.svelte'
  import MediaModal from '$lib/components/posts/media-modal/MediaModal.svelte'
  import SpacedDiv from '$lib/components/layout/SpacedDiv.svelte'
  import Button from '$lib/components/controls/Button.svelte'
  import Card from '$lib/components/containers/Card.svelte'

  let mediaModal
  function openModal(event) {
    mediaModal.openModal(event.detail.post)
  }

</script>


<MediaModal bind:this={mediaModal} />
<HomeHeader />
<Dfs.Page header={false}>
  <Dfs.Section id="about" heading="Meet Goobie" headingColor="blue">
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
            Hi there! My name is Arden, or Goobie, and I call myself a multimedia artist because I'm always looking to challenge myself, try new things, and apply skills I learn in one medium to other mediums. My skills include design, illustration, coding, music production, and video editing.
          </p>
          <p>
            When I'm not creating things, I love to watch and collect movies, play video games, or go out riding on my Onewheel. I also help run the group <a href="https://linktr.ee/fountaincityfurs" target="_blank">Fountain City Furs</a>, where we plan local fursuiting events for the KC area.
          </p>
          <p>
            Click "My Stuff" if you want to see the stuff I make, or scroll all the way down to see my socials!
          </p>
        </SpacedDiv>
      </div>
    </FlexCols>
  </Dfs.Section>


  <Dfs.Section
    id='discord'
    heading="Discord Server"
    headingColor='white'
    bg='blue-stripes'
    topBorder='clouds'
    bottomBorder='clouds'>
    <Card>
      <FlexCols>
        <div class='col-1'>
          <div>
            <Image
              src='/images/camp_goobie.jpg'
              style='max-width:260px; border-radius:var(--rounded-2);'
              alt=''>
            </Image>
            <br />
            <Image
              src='/images/camp_goobie2.jpg'
              style='max-width:260px; border-radius:var(--rounded-2);'
              alt=''>
            </Image>
          </div>
        </div>
        <div class='col-2'>
          <SpacedDiv>
            <h2>Camp Goobie!</h2>
            <p>
              CAMP GOOBIE is the prime vacation destination for sharing memes/shitposts, gaming, art, animations, movie-talk, fandom-talk, and y2k/early 2010s aesthetics. And if you're an individual that creates stuff in any medium, CAMP GOOBIE is the summer camp for you too!
              <br /><br />
              Join for an awesome community of freaks and geeks to chat and make friends with and join us in the voice chat for games, watch-alongs, or just to chat! Come vibe with us! 
            </p>
            <p>
              <a href="https://discord.com/invite/c7hXSMB" target="_blank"><Button background="var(--pink)" color="white" size="big">Join now!</Button></a>
            </p>
          </SpacedDiv>
        </div>
      </FlexCols>
    </Card>
    
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
