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
