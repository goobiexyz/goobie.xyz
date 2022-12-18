<script context='module' lang='ts'>
  import truncateString from '$lib/truncate-string.ts'
  import apiFetch from '$lib/apiFetch.ts'

  export async function load() {
    let props = {
      latestPosts : []
    }

    //get all the art posts
    let art = await apiFetch(
      'posts',
      'sort=date:desc',
      'populate[0]=thumbnail',
      'populate[1]=media_file',
      'pagination[limit]=5'
    )
    if (art != null) {
      props.latestPosts = art.map((post) => {
        let a = post.attributes
        return {
          thumbnailUrl : a.thumbnail.data.attributes.formats.thumbnail.url,
          type         : a.media_type,
          title        : a.title,
          date         : a.date,
          desc         : a.description,
          attributes   : a
        }
      })
    }


    let comicChapters = await apiFetch(
      'comic-chapters',
      'sort=release_date:desc',
      'populate[0]=thumbnail',
      'populate[1]=comic',
      'pagination[limit]=5'
    )
    if (comicChapters != null) {
      for (const ch of comicChapters) {
        let a = ch.attributes

        let thumbnailUrl = ''
        if (a.thumbnail.data != null) {
          thumbnailUrl = a.thumbnail.data.attributes.formats.thumbnail.url
        } else {

          let comic = await apiFetch(
            'comics',
            'filters[url][$eq]='+a.comic.data.attributes.url,
            'populate[0]=thumbnail'
          )

          if (comic != null) {
            let thumb = comic[0].attributes.thumbnail.data.attributes
            thumbnailUrl = thumb.formats.thumbnail.url
          }
        }
        props.latestPosts.push({
          attributes   : a,
          thumbnailUrl : thumbnailUrl,
          type         : 'comic',
          title        : a.title,
          date         : a.release_date,
          desc         : a.description,
          href         : '/comics/'+a.comic.data.attributes.url+'/'+a.chapter_number
        })
      }
    }


    props.latestPosts.sort((a, b) => (a.date > b.date) ? -1 : 1)
    return { props }
  }
</script>


<script>
  export let latestPosts

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
        <div>
          <Image
            src='/images/grace_portrait.jpg'
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
    topBorder='clouds'>
    <LatestPosts postList={latestPosts} on:postClick={openModal} />
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
