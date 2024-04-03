<script>
  export let title = ''
  export let header = true
  export let footer = true
  export let dark = false
  import Footer from './Footer.svelte'
  import Header from './Header.svelte'

</script>


<svelte:head>
  <title>{title ? title+' | ' : ''}goobie.xyz</title>
  <meta name='description' content='Multimedia artist specializing in graphic design, illustration, coding, video editing, and music production' />
  <meta name='author' content='goobie' />

  <meta property='og:image' content='/images/goobie_social_image.jpg' />
  <meta property="og:image:width" content="1000" />
  <meta property="og:image:height" content="500" />
  <meta property="og:image:type" content="image/jpg" />
  <meta property="twitter:card" content="summary_large_image" />
  
  {#if dark}
    <style>

      body {
        background: var(--black);
      }
    </style>
  {/if}
</svelte:head>

<svelte:body class:dark />

{#if header}
  <Header>{title}</Header>
{/if}
<main><slot></slot></main>

{#if footer}
  <Footer />
{/if}
