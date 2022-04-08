<script>
  import IconButton from './IconButton.svelte'

  export let type
  export let size
  let title = ''
  let location = ''

  switch (type) {
    case "logo":
      title = "Home"
      location = "/"
      break

    case "twitter":
      title = "Twitter"
      location = "https://twitter.com/gracieart"
      break

    case "youtube":
      title = "YouTube"
      location = "https://youtube.com/graciebell"
      break

    case "soundcloud":
      title = "SoundCloud"
      location = "https://soundcloud.com/gracieart"
      break

    case "github":
      title = "GitHub"
      location = "https://github.com/gracieart"
      break
  }

</script>

<a {title} href="{location}"><IconButton {type} {size} /></a>
