<script>
  import * as Dfs from '$lib/defaults.js'
  import socialLinks from '$lib/social-links.json'
  import ContactForm from '$lib/components/forms/ContactForm.svelte'
  import Flex2Col from '$lib/components/layout/Flex2Col.svelte'
  import Button from '$lib/components/controls/Button.svelte'
  import SpacedDiv from '$lib/components/layout/SpacedDiv.svelte'
  import ContentAndSidebar from '$lib/components/layout/ContentAndSidebar.svelte'
</script>


<Dfs.Page title='Contact'>
  <Dfs.Section simple='true' spacing='double'>
    <p>Contact me any way you'd like! However, if you are looking to get a commission, I would prefer it if you would contact me on either Telegram, Twitter, or Discord—if you use any of those services—because it will be much easier to discuss the details and to send work-in-progress pictures over direct messages rather than email, but that is not required.</p>

    <ContentAndSidebar>
      <div slot='content'>
        <h2>Email</h2>
        <ContactForm />
      </div>

      <dl slot='sidebar'>
        <h2>Social</h2>
        <dt>Twitter</dt>
        <dd><a href='{socialLinks.twitter}'>@GracieArt</a></dd>
        <dt>Telegram</dt>
        <dd><a href='{socialLinks.telegram}'>@GracieArt</a></dd>
        <dt>Discord</dt>
        <dd><a href='{socialLinks.discord}'>GracieArt#1312</a></dd>
      </dl>
    </ContentAndSidebar>
  </Dfs.Section>
</Dfs.Page>

<style lang='scss'>
  @import 'src/styles/breakpoints.scss';
  @import 'src/styles/spacing.scss';

  :global(h2 + *) {
    margin-top: $half-margin;
  }

  dt {
    font-weight: bold;

    &:not(:first-child) {
      margin-top: $half-margin;
    }
  }

</style>
