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
    <p>The best way to contact me is via e-mail, or through messaging apps like Discord or Telegram. If you're sending me a message on Discord however, please note that I do not accept random friend requests, so you'll have to find a way to DM me without friending me. You can also message me on my other socials but I might not check those as often.</p>

    <FlexCols colGap='var(--double-margin)' rowGap='var(--double-margin)'>
      <div class='col-1'>
        <div class='email-form'>
          <h2>Email</h2>
          <ContactForm />
        </div>
      </div>

      <div class='col-2'>
        <dl class='other-contacts'>
          <h2>Messaging</h2>
          <SpacedDiv spacing='half'>
            <div class='contact-item'>
              <dt>Telegram</dt>
              <dd><a href='{socialLinks.telegram}'>goobiegoober</a></dd>
            </div>
            <div class='contact-item'>
              <dt>Discord</dt>
              <dd><a href='{socialLinks.discord}'>goobiexyz</a></dd>
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
