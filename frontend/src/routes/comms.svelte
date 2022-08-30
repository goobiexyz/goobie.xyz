<script>
  import * as Dfs from '$lib/defaults.js'
  import commsData from '$lib/data/comms-data.json'
  import CommCard from '$lib/components/comms/CommCard.svelte'
  import FlexCols from '$lib/components/layout/FlexCols.svelte'
  import CommsQueue from '$lib/components/comms/CommsQueue.svelte'

  $: innerWidth = 0
</script>


<svelte:window bind:innerWidth />


<Dfs.Page title='{innerWidth < 600 ? 'Comms.' : 'Commissions'}'>
  <Dfs.Section heading='Queue' simple=true>
    <CommsQueue />
  </Dfs.Section>


  <Dfs.Section heading='Info' simple=true>
  <FlexCols colGap='var(--double-margin)'>
    <div class='column' style='flex: 1;'>
      <div class='list'>
        <h3>General Terms:</h3>
        <ul>
          <li>I will not start working until I am paid in full.</li>
          <li>You have the right to use the finished work however you want, as long as you give me credit for creating it.</li>
          <li>The finished work will be public and I may use it to advertise my commissions.</li>
          <li>During the sketching process, I will share work-in-progress screenshots. This will be your opportunity to provide feedback. Please be specific and concise.</li>
          <li>I will not accept any additions to the scene, changes to anything that differs from the sketch, or requests for alternate versions once the final sketch has been approved and I've already moved forward with the final render.</li>
        </ul>
      </div>
    </div>

    <div class='column' style='flex: 1; flex-direction: column;'>
      <div class='list'>
        <h3>I Can Draw:</h3>
        <ul>
          <li>Characters you have permission to use</li>
          <li>Fan characters and OCs</li>
          <li>Anthropomorphic characters</li>
          <li>Safe content or adult content</li>
        </ul>
      </div>

      <div class='list'>
        <h3>I Cannot Draw:</h3>
        <ul>
          <li>Characters you don't have permission to use</li>
          <li>Most non-anthro characters</li>
          <li>Anything that grosses me out or makes me uncomfortable</li>
          <li>I'm not going to make a comprehensive list of things that make me uncomfortable, so please send me your idea and I'll tell you whether I'd be willing to draw it or not.</li>
        </ul>
      </div>
    </div>
  </FlexCols>




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



<style lang='postcss'>
  .column {
    flex: 1 1 50%;
    min-width: 25ch;
  }

  li + li, ul  {
    margin-top: var(--half-margin);
  }

  .list {
    font-size: small;

    &:not(:first-child) {
      margin-top: var(--margin);
    }
  }

  .comm-option {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .option-title + * {
    margin-top: var(--half-margin);
  }

  .choices {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    & :global(>*) {
      margin: var(--half-margin);
    }
  }
</style>
