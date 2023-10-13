<script>
    import * as Dfs from '$lib/defaults.js'
    import socialLinks from '$lib/social-links.json'
    import ContactForm from '$lib/components/forms/ContactForm.svelte'
    import FlexCols from '$lib/components/layout/FlexCols.svelte'
    import Button from '$lib/components/controls/Button.svelte'
    import SpacedDiv from '$lib/components/layout/SpacedDiv.svelte'
    import Image from '$lib/components/media/Image.svelte'
    import HomeHeader from '$lib/components/home/header/HomeHeader.svelte'
  </script>
  
  

  
  <Dfs.Page title='Contact' header={false}>
    <HomeHeader />
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
                Hi there! My name is Grace and I call myself a multimedia artist because I'm always looking to challenge myself, try new things, and apply skills I learn in one medium to other mediums. My skills include design, illustration, coding, composing, and video editing. For my full resume, <a href="/resume.pdf"> click here! </a>
            </p>
            <p>
                I'm currently taking commissions for character art and graphic design. <a href='comms'>Click here for more information</a>. And don't hesitate to contact me about any other ideas and projects you may have. I have a wide range of skills that I love to apply wherever I can!
            </p>
            </SpacedDiv>
        </div>
        </FlexCols>
    </Dfs.Section>
      

    <Dfs.Section simple='true' spacing='double' heading="Education">
      <p>I've been to two colleges honing my creative and computer skills, first earning my AA at Donnelly College, and transferring to UMKC to get a BA in Media, Art, and Design, with a focus on Digital Design, additionally I'm minoring in Computer Science. The following is a summary of some noteworthy classes I have taken at both colleges.</p>
        

      <FlexCols colGap='var(--double-margin)'>
        <div class='column' style='flex: 1; flex-direction: column;'>
          <div class='list'>
            <h3>AA in Liberal Arts - Donnelly College</h3>
            <ul>
              <li>Business 101</li>
              <li>Environmental Ethics</li>
              <li>Personal Finance</li>
              <li>Business IT Applications</li>
              <li>Public Speaking</li>
            </ul>
          </div>
        </div>
    
        <div class='column' style='flex: 1; flex-direction: column;'>
          <div class='list'>
            <h3>BA in Media, Art, and Design</h3>
            <ul>
                <li>Graphic Design</li>
                <li>Problem Solving and Programming</li>
                <li>Data Structures</li>
                <li>Digital Video/Motion Design</li>
                <li>Design Thinking</li>
                <li>Web Development</li>
            </ul>
          </div>
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

    .column {
        flex: 1 1 50%;
        min-width: 25ch;
    }

    li + li, ul  {
        margin-top: var(--half-margin);
    }

    .list {
        font-size: small;

        &:not(:first-child) {
            margin-top: var(--margin);
        }
    }

    @media only screen and (max-width: token(breakpoints.ss)) {
        .col-2 {
            min-width: 100%;
        }
    }

  </style>
  