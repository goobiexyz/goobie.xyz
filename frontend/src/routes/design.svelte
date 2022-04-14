<script>
  import * as Dfs from '$lib/defaults.js'

  let imgDir = '/images/design_portfolio/'
  // Best to clean this page up a bit lol
</script>


<Dfs.Page title='Design'>
  <Dfs.Section simple='true'>
    <p>Graphic Design is something that I have always found to be really engaging, to think about art in a functional way and utilize the principles of design to enhance the information being conveyed, something that text alone cannot do. I've selected a number of designs from my freelance work that showcase my substantial experience and versatility as a designer.</p>
  </Dfs.Section>
  <Dfs.Section heading='Portfolio' simple='true'>
    <div class="image-col">
      <img src="{imgDir}gbell_icon.jpg" alt="">
      <img src="{imgDir}rute_logo.jpg" alt="">
      <img src="{imgDir}gooden_logo.jpg" alt="">
      <img src="{imgDir}pv_logo.jpg" alt="">
      <img src="{imgDir}cloud_castle_logo.jpg" alt="">
      <img src="{imgDir}belgium_logo.jpg" alt="">
      <img src="{imgDir}gracie bell_logo.jpg" alt="">
      <img src="{imgDir}buffalofish_logo.jpg" alt="">
      <img src="{imgDir}shortcake_logo.jpg" alt="">
      <img src="{imgDir}acr_logo.jpg" alt="">
      <img src="{imgDir}bread momma_logo.jpg" alt="">
      <img src="{imgDir}friend hunters_logo.jpg" alt="">
      <img src="{imgDir}momo_banner.jpg" alt="" class="wide">
      <img src="{imgDir}chocolate_liquor.jpg" alt="">
      <img src="{imgDir}amy_logo.jpg" alt="">
      <img src="{imgDir}Halo cover art.jpg" alt="">
      <img src="{imgDir}bday card.jpg" alt="" class="wide">
      <img src="{imgDir}bread momma candy.jpg" alt="" class="tall wide-2">
      <img src="{imgDir}ivory spread.jpg" alt="">
      <img src="{imgDir}Kawaii face_void eon.jpg" alt="">
      <img src="{imgDir}goo resort.jpg" alt="" class="wide">
    </div>
  </Dfs.Section>
</Dfs.Page>


<style lang='postcss'>
  .image-col {
    $col-size: 300px;
    $gap-size: var(--double-margin);

    display: grid;
    grid-template-columns: fit-content($col-size) fit-content($col-size) fit-content($col-size);
    grid-row-gap: $gap-size;
    grid-column-gap: $gap-size;
    justify-content: center;
    align-items: center;
    justify-items: center;

    img {
      max-width: 100%;
    }

    .wide {
      grid-column: span 3;
    }

    .wide-2 {
      grid-column: span 2;
    }

    .tall {
      grid-row: span 2;
    }
  }


  @media only screen and (max-width: token(breakpoints.m)) {
    .image-col {
      grid-row-gap: var(--margin);
      grid-column-gap: var(--margin);
    }
  }


  @media only screen and (max-width: token(breakpoints.ss)) {
    .image-col {
      grid-template-columns: 100%;
      .wide, .wide-2, .tall {
        grid-row: span 1;
        grid-column: span 1;
      }
    }
  }
</style>
