<script>
  import Flex2Col from '../../layout/Flex2Col.svelte'
  import Button from '../../controls/Button.svelte'
  import convertDate from '$lib/convert-date.js'

  export let post
  let thumbnail = 'https://api.graciebell.art'+post.attributes.thumbnail.data.attributes.formats.thumbnail.url
  let type = post.attributes.media_type
  let title = post.attributes.title
  let date = post.attributes.date
</script>



<article>
  <div class='col-1'><img src={thumbnail} alt=''/></div>

  <div class='col-2'>
    <span class='content-type'>{type}</span>
    <h3>{title}</h3>
    <time>{convertDate(date)}</time>
  </div>
</article>


<style lang='scss'>
  @import 'src/styles/breakpoints.scss';
  @import 'src/styles/spacing.scss';

  article {
    background: white;
    padding: $half-margin;
    border-radius: 16px;
    color: var(--dark-blue);
    display: flex;
    width: 512px;

    .col-1 {
      margin-right: $half-margin;
    }

    .content-type {
      display: block;

      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 4px;
      font-weight: bold;
    }

    h3 {
      font-family: 'urbane-bold';
      font-size: 1.25rem;
    }

    img {
      border-radius: 10px;
      height: 123px;
      width: 123px;
      display: block;
    }

    time {
      margin-top: 8px;
      display: block;
      font-family: monospace;
    }
  }




  @media only screen and (max-width: $s) {
    article {
      width: 100%;
    }
  }


  @media only screen and (max-width: $ss) {
    article {
      padding: 0 0 $margin 0;
      background: none;

      border-bottom: 1px white dashed;
      border-radius: 0;
      color: white;

      img {
        height: 80px;
        width: 80px;
      }
    }
  }
</style>
