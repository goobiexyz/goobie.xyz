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
    setTimeout(b3.hide, 150)
    setTimeout(() => {
      bgroup1.show()
      bgroup0.hide()
      expanded = true
    }, 250)
    setTimeout(b4.show, 350)
    setTimeout(b5.show, 400)
    setTimeout(b6.show, 450)
    setTimeout(b7.show, 500)
    setTimeout(b8.show, 550)
    // setTimeout(b9.show, 550)
  }


  function openBGroup0() {
    b3.hide()
    setTimeout(b4.hide, 50)
    setTimeout(b5.hide, 100)
    setTimeout(b6.hide, 150)
    setTimeout(b7.hide, 200)
    setTimeout(b8.hide, 250)
    // setTimeout(b9.hide, 300)
    setTimeout(() => {
      bgroup1.hide()
      bgroup0.show()
      expanded = false
    }, 400)
    setTimeout(b0.show, 450)
    setTimeout(b1.show, 500)
    setTimeout(b2.show, 550)
    setTimeout(b3.show, 600)
  }
</script>


<header>
<div class='header-bg'></div>
  <div class="header-body" class:expanded>
    <h1 id="logo">
      <img class="logo" src="/images/goobie logo.png" alt="Gracie Bell: Multimedia Artist">
    </h1>

    <nav>
      <NavBGroup bind:this={bgroup1} hidden="true">
        <NavButton bind:this={b4} on:click={openBGroup0} icon="back" hidden="true">Back</NavButton>
        <NavButton bind:this={b5} icon="video" href="{socialLinks.youtube}" target="_blank" hidden="true">Videos</NavButton>
        <NavButton bind:this={b6} icon="image" href="{socialLinks.newgrounds}" target="_blank" hidden="true">Art</NavButton>
        <NavButton bind:this={b7} icon="music" href="{socialLinks.soundcloud}" target="_blank" hidden="true">Music</NavButton>
        <NavButton bind:this={b8} icon="code" href="{socialLinks.github}" target="_blank" hidden="true">Code</NavButton>
        <!-- <NavButton bind:this={b9} icon="comics" href="dance" hidden="true">???</NavButton> -->
      </NavBGroup>

      <NavBGroup bind:this={bgroup0}>
        <NavButton bind:this={b0} on:click={openBGroup1} icon="work">My Stuff</NavButton>
        <NavButton bind:this={b1} icon="store" href="{socialLinks.etsy}">Shop</NavButton>
        <NavButton bind:this={b2} icon="comms" href="comms">Comms</NavButton>
        <NavButton bind:this={b3} icon="contact" href="contact">Contact</NavButton>
      </NavBGroup>
    </nav>
  </div>
</header>


<style lang="postcss">
  @keyframes scroll {
    100% {
      background-position: 600px 400px;
    }
  }

  header {
    background: url('/images/backgrounds/bg-abstract.png') repeat;
    background-attachment: fixed;
    animation: 20s scroll infinite linear;

    height: max-content;
    margin-top: 0;
    margin-bottom: calc(var(--margin) * 3);
    padding: var(--double-margin) var(--margin);

    overflow: hidden;

    border-bottom: 5rem solid;
    border-image-slice: 0 0 100% 0;
    border-image-repeat: repeat;
    border-image-outset: 2px;
    border-image-source: url('/images/borders/benday_inverted.svg');
  }

  h1 {
    margin-top: var(--margin);
    text-align: center;
  }

  nav {
    margin-top: var(--margin);
    height: 224px;
  }

  .header-body {
    transform: translateY(58px);
    transition: transform 0.25s;
    position: relative;

    /* &.expanded {
      transform: translateY(0px);
    } */
  }

  .logo {
    width: 32rem;
  }


  @media only screen and (max-width: token(breakpoints.s)) {
    header {
      padding-top: var(--margin);
      padding-bottom: calc(var(--margin) + 1rem);
    }
  }


  @media only screen and (max-width: token(breakpoints.ss)) {

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
