<script>
  import IconButton from './IconButton.svelte'
  import socialLinks from '$lib/social-links.json'

  export let type
  export let size
  export let color

  let title = ''
  let location = ''

  switch (type) {
    case "logo":
      title = "Home"
      location = "/"
      break

    case "twitter":
      title = "Twitter"
      location = socialLinks.twitter
      break

    case "youtube":
      title = "YouTube"
      location = socialLinks.youtube
      break

    case "soundcloud":
      title = "SoundCloud"
      location = socialLinks.soundcloud
      break

    case "github":
      title = "GitHub"
      location = socialLinks.github
      break
  }

</script>

<a {title} href="{location}"><IconButton {type} {size} {color} /></a>
