<script>
  import * as Dfs from '$lib/defaults.js'
  import PostList from '$lib/components/blog/post-list/PostList.svelte'
</script>


<Dfs.Page title='Blog'>
  <Dfs.Section simple='true' bg='gracie'>
    <div class='grid'>
      <PostList class='content' style='simple' shrinkwrap={false} />
    </div>
  </Dfs.Section>
</Dfs.Page>
