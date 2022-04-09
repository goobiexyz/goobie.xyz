<script>
  import NavButton from './NavButton.svelte'
  import NavBGroup from './NavBGroup.svelte'
  import socialLinks from '$lib/social-links.json'
  let b0, b1, b2, b3, b4, b5, b6, b7, b8, b9
  let bgroup0, bgroup1
  let expanded = false

  function openBGroup1() {
    b0.hide()
    setTimeout(b1.hide, 50)
    setTimeout(b2.hide, 100)
    setTimeout(() => {
      bgroup1.show()
      bgroup0.hide()
      expanded = true
    }, 200)
    setTimeout(b3.show, 250)
    setTimeout(b4.show, 300)
    setTimeout(b5.show, 350)
    setTimeout(b6.show, 400)
    setTimeout(b7.show, 450)
    setTimeout(b8.show, 500)
    setTimeout(b9.show, 550)
  }


  function openBGroup0() {
    b3.hide()
    setTimeout(b4.hide, 50)
    setTimeout(b5.hide, 100)
    setTimeout(b6.hide, 150)
    setTimeout(b7.hide, 200)
    setTimeout(b8.hide, 250)
    setTimeout(b9.hide, 300)
    setTimeout(() => {
      bgroup1.hide()
      bgroup0.show()
      expanded = false
    }, 400)
    setTimeout(b0.show, 450)
    setTimeout(b1.show, 500)
    setTimeout(b2.show, 550)
  }
</script>


<header>
<div class='header-bg'></div>
  <div class="header-body" class:expanded>
    <h1 id="logo">
      <picture>
        <source media="(max-width: 600px)" srcset="/images/logo_no_cloud.svg">
        <img class="logo" src="/images/logo.svg" alt="Gracie Bell: Multimedia Artist">
      </picture>
    </h1>

    <nav>
      <NavBGroup bind:this={bgroup1} hidden="true">
        <NavButton bind:this={b3} on:click={openBGroup0} icon="back" hidden="true">Back</NavButton>
        <NavButton bind:this={b4} icon="image" href="art" hidden="true">Art</NavButton>
        <NavButton bind:this={b5} icon="design" href="design" hidden="true">Design</NavButton>
        <NavButton bind:this={b6} icon="comics" href="comics" hidden="true">Comics</NavButton>
        <NavButton bind:this={b7} icon="music" href="{socialLinks.soundcloud}" hidden="true">Music</NavButton>
        <NavButton bind:this={b8} icon="code" href="{socialLinks.github}" hidden="true">Code</NavButton>
        <NavButton bind:this={b9} icon="video" href="{socialLinks.youtube}" hidden="true">Videos</NavButton>
      </NavBGroup>

      <NavBGroup bind:this={bgroup0}>
        <NavButton bind:this={b0} on:click={openBGroup1} icon="work">My Work</NavButton>
        <NavButton bind:this={b1} icon="comms" href="comms">Commissions</NavButton>
        <NavButton bind:this={b2} icon="contact" href="contact">Contact</NavButton>
      </NavBGroup>
    </nav>
  </div>
</header>


<style lang="scss">
  @import 'src/styles/breakpoints.scss';
  @import 'src/styles/spacing.scss';

  @keyframes scroll {
    100% {
      background-position: 400px 173.2px;
    }
  }

  header {
    background: url('/images/backgrounds/bg-dots.png') repeat;
    background-attachment: fixed;
    animation: 8s scroll infinite linear;

    height: max-content;
    margin-top: 0;
    padding: $double-margin $margin;

    overflow: hidden;

    border-bottom: 5rem solid;
    border-image-slice: 0 0 100% 0;
    border-image-repeat: repeat;
    border-image-outset: 2px;
    border-image-source: url('/images/borders/benday_inverted.svg');
  }

  h1 {
    margin-top: $margin;
    text-align: center;
  }

  nav {
    margin-top: $margin;
    height: 224px;
  }

  .header-body {
    transform: translateY(58px);
    transition: transform 0.25s;
    position: relative;

    &.expanded {
      transform: translateY(0px);
    }
  }

  .logo {
    width: 32rem;
  }


  @media only screen and (max-width: $s) {
    header {
      padding-top: $margin;
      padding-bottom: calc(#{$margin} + 1rem);
    }
  }


  @media only screen and (max-width: $ss) {

    .header-body {
      width: 80vw;
      margin: auto;
      transform: translateY(0);
    }

    nav {
      display: block;
      height: min-content;
    }

    .logo {
      width: 100%;
    }
  }
</style>
