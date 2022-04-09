<script context='module'>
  export async function load({ params, fetch }) {
    let id = params.id
    const response = await fetch(`/api/grabble/get/${id}`)

    let post
    if (!response.ok) {
      return response
    }

    post = await response.json()

    const response2 = await fetch(`/posts/blog/${id}.md`)
    if (!response2.ok) {
      return {
        status : 500,
        body : 'File missing'
      }
    }

    let blogBody = await response2.text()

    return {
      status: 200,
      props: {
        post: post,
        blogBody: blogBody
      }
    }
  }
</script>

<script>
  //export let post
  export let blogBody

  import * as Dfs from '$lib/defaults.js'
  import SvelteMarkdown from 'svelte-markdown'
</script>



<Dfs.Page title='Blog'>
  <Dfs.Section simple='true'>
    <article>
      <SvelteMarkdown source={blogBody} />
    </article>
  </Dfs.Section>
</Dfs.Page>
