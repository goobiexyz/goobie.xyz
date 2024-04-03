<script>
    import * as Dfs from '$lib/defaults.js'
    import { page } from '$app/stores'
    import SpacedDiv from '$lib/components/layout/SpacedDiv.svelte'
  </script>
  
  
  <Dfs.Page title='Error'>
    <Dfs.Section simple='true' spacing='' heading='{$page.status}: {$page.error.message}' noHeadingBorder>
        <SpacedDiv style="text-align:center;">
            <a href="/">Click here to put the CD back in your computer.</a>
            <img src="/images/oops.gif" alt="" style="max-width: 100%;"/>
        </SpacedDiv>
        
    </Dfs.Section>
  </Dfs.Page>
  