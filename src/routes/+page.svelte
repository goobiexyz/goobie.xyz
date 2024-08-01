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
            src='/images/goobie.jpg'
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
