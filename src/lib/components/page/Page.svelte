<script>
  export let title = ''
  export let header = true
  export let footer = true
  export let dark = false
  export let noEmbed = false
  import Footer from './Footer.svelte'
  import Header from './Header.svelte'

</script>


<svelte:head>
  <title>{title ? title+' | ' : ''}goobie.xyz</title>
  {#if !noEmbed}
    <meta name='description' content='the goob zone is real, where dreams come true' />
    <meta name='author' content='goobie' />
    <meta property='og:image' content='/images/goobie_social_image.jpg' />
    <meta property="og:image:width" content="1000" />
    <meta property="og:image:height" content="500" />
    <meta property="og:image:type" content="image/jpg" />
    <meta property="twitter:card" content="summary_large_image" />
  {/if}
  
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
