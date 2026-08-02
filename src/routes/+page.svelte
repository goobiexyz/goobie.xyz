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
  import socialLinks from '$lib/social-links.json'


  let mediaModal
  function openModal(event) {
    mediaModal.openModal(event.detail.post)
  }

  function preventOrphan(str) {
  // If the string has fewer than 3 words, return the original string
  const words = str.split(' ');
  if (words.length < 3) return str;

  // Join all words except the last two
  const firstPart = words.slice(0, -1).join(' ');
  
  // The rest of the words
  const secondPart = words.slice(-1, words.length).join(' ');;

  // Reconstruct the string with &nbsp; inserted
  return firstPart + "\u00A0" + secondPart
}
</script>


<MediaModal bind:this={mediaModal} />
<HomeHeader />
<Dfs.Page header={false}>
  <Dfs.Section id="about" heading="Who's Goobie?" headingColor="blue">
    <FlexCols>
      <div class='col-1'>
        <div>
          <Image
            src='/images/goobiebunny.jpg'
            style='max-width:13.66rem; border-radius:var(--rounded-2);'
            alt=''>
          </Image>
        </div>
      </div>
      <div class='col-2'>
        <SpacedDiv>
          <p>
            Goobie is me! I refer to myself as a multimedia artist because I like to experiment with many different types of art and media, from music to visual arts, dumb videos, and more.
          </p>
          <p>
            When I'm not creating things, I love to watch and collect movies or play video games. My favorite movie is E.T., and my favorite games are Link to the Past, Hitman WOA, and TF2.
          </p>
          <p>
            Interested in seeing my work? Click "My Stuff" at the top and check out all the stuff I've made, or scroll down to see my socials.
          </p>
        </SpacedDiv>
      </div>
      </FlexCols>
  </Dfs.Section>

  {#if (data.latestArt && data.latestVid) }
    <Dfs.Section heading="What's New?" headingColor="blue">
      <p>Check out the latest stuff I've made! Click on an item to check it out!</p>
      <div class="latest-container">
        <a href="{socialLinks.newgrounds}art" target="_blank">
          <h3>Art</h3>
          <img src="{data.latestArt.imgSrc}" />
          <p>{preventOrphan(data.latestArt.title)}</p>
        </a>
        <a href="{data.latestVid.link}" target="_blank">
          <h3>Video</h3>
          <img src="{data.latestVid.imgSrc}" />
          <p>{preventOrphan(data.latestVid.title)}</p>
        </a>
        <a href="https://on.soundcloud.com/DWswFJCknKSGsRB26" target="_blank">
          <h3>Music</h3>
          <img src="/images/daydreamsofabunny.jpg" />
          <p>Daydreams of a Bunny</p>
        </a>
      </div>
    </Dfs.Section>
  {/if}
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

  .latest-container {
    display: flex;
    gap: 1em;

    a {
      flex-grow: 1;
      flex-basis: 0;
      text-decoration: none;
      transition: 0.1s;

      &:hover {
        transform: scale(1.02);
      }
    }

    h3 {
      font-size: 2em;
      font-family: freude, sans-serif;
      color: var(--red);
    }

    p {
      font-weight: bold;
      //font-size: 1em;
      text-wrap: pretty;
      color: var(--blue);
      text-decoration: underline;
    }

    img {
      max-width: 100%;
      border-radius: 0.5em;
    }
  }

  @media only screen and (max-width: token(breakpoints.ss)) {
    .latest-container {
      flex-direction: column;
    }

    .col-2 {
      min-width: 100%;
    }
  }
</style>
