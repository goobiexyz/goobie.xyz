<script>
  import * as Dfs from '$lib/defaults.js'
  import commsData from '$lib/comms-data.json'
  import CommCard from '$lib/components/comms/CommCard.svelte'
  import Flex2Col from '$lib/components/layout/Flex2Col.svelte'
  import CommsQueue from '$lib/components/comms/CommsQueue.svelte'

  $: innerWidth = 0
</script>


<svelte:window bind:innerWidth />


<Dfs.Page title='{innerWidth < 600 ? 'Comms.' : 'Commissions'}'>
  <Dfs.Section heading='Queue' simple=true>
    <CommsQueue />
  </Dfs.Section>


  <Dfs.Section heading='Info' simple=true>
  <Flex2Col halfnhalf=true margin='double'>
    <div slot='col-1'>
      <div class='list'>
        <h3>General Terms:</h3>
        <ul>
          <li>I will not start working on the drawing until I am paid in full</li>
          <li>You can use the final drawing however you want as long as I'm credited where appropriate</li>
          <li>Unless you request to keep the drawing private, there is a good chance I will be posting it online, including it in my portfolio, and using it to advertise my commissions</li>
          <li>I will show you work-in-progress pictures as I am sketching, giving you the opportunity to provide feedback</li>
          <li>Once I finish the final sketch, I will wait until you've explicitly approved it before proceeding, after which I will not make any more adjustments to the character's pose</li>
        </ul>
      </div>
    </div>

    <div slot='col-2'>
      <div class='list'>
        <h3>I Can Draw:</h3>
        <ul>
          <li>Characters you have permission to use</li>
          <li>Fan characters and OCs</li>
          <li>Anthropomorphic characters are my specialty, but I'm open to most other types of creatures</li>
          <li>Safe content or adult content</li>
        </ul>
      </div>

      <div class='list'>
        <h3>I Cannot Draw:</h3>
        <ul>
          <li>Characters you don't have permission to use</li>
          <li>Feral animals (because I haven't learned how)</li>
          <li>Most illegal activities and offensive themes</li>
          <li>If you are unsure if your idea is something I can draw, don't be shy to ask me about it</li>
        </ul>
      </div>
    </div>
  </Flex2Col>




  </Dfs.Section>

  <Dfs.Section heading='Pricing' spacing='double' simple='true'>
    {#each commsData.charArt.options as opt, i}
      <div class='comm-option'>
        <h3 class='option-title'>{i+1}. Choose the {opt.name}</h3>
        <div class='choices'>
          {#each opt.choices as choice}
            <CommCard
              name={choice.name}
              thumb={commsData.thumbsDir+choice.thumb}
              notes={choice.notes}
              price='{i > 0 ? '+ ' : ''}${choice.price}'>
            </CommCard>
          {/each}
        </div>
      </div>
    {/each}
    <div class='comm-option'>
      <h3 class='option-title'>4. Extra Characters</h3>
      <p>+ $10 for each additional character</p>
    </div>
  </Dfs.Section>

  <Dfs.Section heading='Other Prices' spacing='double' simple='true'>
    <div class='comm-option'>
      <div class='choices'>
        {#each commsData.extras as opt, i}
          <CommCard
            name={opt.name}
            thumb={commsData.thumbsDir+opt.thumb}
            notes={opt.notes}
            price='${opt.price}{opt.unit ? ' per '+opt.unit : ''}'>
          </CommCard>
        {/each}
        <CommCard
          name='Other Ideas?'
          thumb='{commsData.thumbsDir}xtra_other_ideas.png'
          notes=''
          price='Contact Me'>
        </CommCard>
      </div>
    </div>
  </Dfs.Section>
</Dfs.Page>



<style lang='scss'>
  @import 'src/styles/spacing.scss';

  li + li, ul  {
    margin-top: $half-margin;
  }

  .list {
    font-size: small;

    &:not(:first-child) {
      margin-top: $margin;
    }
  }

  .comm-option {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .option-title + * {
    margin-top: $half-margin;
  }

  .choices {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    & :global(>*) {
      margin: $half-margin;
    }
  }
</style>
