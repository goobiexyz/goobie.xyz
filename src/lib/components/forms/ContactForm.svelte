<script>
  import Button from '../controls/Button.svelte'
</script>


<form target='_blank' action='https://formsubmit.co/7089a05da9432cd14cc114e7a8321023' method='post'>
  <label for='subject' style='display:none'>Subject</label>
  <input type='text' id='subject' name='_honey' style='display:none'>
  <input type="hidden" name="_blacklist" value="SEO">

  <fieldset class='horizontal'>
    <fieldset>
      <label class='required' for="name">Name</label>
      <input
        type='text'
        id='name'
        name='name'
        placeholder='Your name...'
        required />
    </fieldset>
    
    <fieldset>
      <label class='required' for='email'>Email</label>
      <input
        type='text'
        id='email'
        name='email'
        placeholder='yourname@example.com'
        required />
    </fieldset>
  </fieldset>

  <fieldset>
    <label class='required' for='message'>Message</label>
    <textarea
      id='message'
      name='message'
      placeholder='Write something...'
      required>
    </textarea>
  </fieldset>

  <small style='color: var(--red);'>*Required field</small>

  <Button
    id='submit'
    background='var(--dark-blue)'
    color='white'
    size='big'
    rounded='var(--rounded-1)'>
    Send
  </Button>
</form>



<style lang='postcss'>
  .required:after {
    content: '*';
    color: var(--red);
  }

  form {
    display: flex;
    flex-direction: column;

    & :global(>*):not(:first-child) {
      margin-top: var(--margin);
    }

    & :global(#submit) {
      width: min-content;
    }
  }

  .horizontal {
    display: flex;

    &>*:not(:last-child) {
      margin-right: var(--margin);
    }
  }

  label, input, textarea, fieldset {
    display: block;
    width: 100%;
  }

  input, textarea {
    border-color: var(--blue);
    margin-top: 4px;
  }

  textarea {
    height: 200px;
  }

  label {
    color: var(--dark-blue);
  }
</style>
