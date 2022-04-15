<script>
  import * as Dfs from '$lib/defaults.js'
  import socialLinks from '$lib/social-links.json'
  import ContactForm from '$lib/components/forms/ContactForm.svelte'
  import FlexCols from '$lib/components/layout/FlexCols.svelte'
  import Button from '$lib/components/controls/Button.svelte'
  import SpacedDiv from '$lib/components/layout/SpacedDiv.svelte'
</script>


<Dfs.Page title='Contact'>
  <Dfs.Section simple='true' spacing='double'>
    <p>Contact me any way you'd like! However, if you are looking to get a commission, I would prefer it if you would contact me on either Telegram, Twitter, or Discord—if you use any of those services—because it will be much easier to discuss the details and to send work-in-progress pictures over direct messages rather than email, but that is not required.</p>

    <FlexCols colGap='var(--double-margin)' rowGap='var(--double-margin)'>
      <div class='col-1'>
        <div class='email-form'>
          <h2>Email</h2>
          <ContactForm />
        </div>
      </div>

      <div class='col-2'>
        <dl class='other-contacts'>
          <h2>Social</h2>
          <SpacedDiv spacing='half'>
            <div class='contact-item'>
              <dt>Twitter</dt>
              <dd><a href='{socialLinks.twitter}'>@GracieArt</a></dd>
            </div>
            <div class='contact-item'>
              <dt>Telegram</dt>
              <dd><a href='{socialLinks.telegram}'>@GracieArt</a></dd>
            </div>
            <div class='contact-item'>
              <dt>Discord</dt>
              <dd><a href='{socialLinks.discord}'>GracieArt#1312</a></dd>
            </div>
          </SpacedDiv>
        </dl>
      </div>
    </FlexCols>
  </Dfs.Section>
</Dfs.Page>

<style lang='postcss'>

  .email-form {
    width: 100%;
  }

  .col-1 {
    flex: 2 1;
    min-width: 75%;

    :global(h2+*) {
      margin-top: var(--half-margin);
    }
  }

  .col-2 {
    flex: 1 1;
  }

  dt {
    font-weight: bold;
    margin-top: var(--half-margin);
  }
</style>
