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


  <Dfs.Section heading='Terms of Service' simple=true>
  <FlexCols colGap='var(--double-margin)'>
    <div class='column' style='flex: 1; flex-direction: column;'>
      <div class='list'>
        <h3>What I Can Draw</h3>
        <ul>
          <li>I have the right to turn down a commission for any reason, including if I'm just not interested in the idea.</li>
          <li>I draw safe and adult content.</li>
          <li>I won't draw underage characters.</li>
        </ul>
      </div>

      <div class='list'>
        <h3>Payment</h3>
        <ul>
          <li>I will not start working until I am paid in full.</li>
          <li>Payments will be done through PayPal in USD.</li>
          <li>No refunds unless I decide to cancel the order.</li>
        </ul>
      </div>
    </div>

    <div class='column' style='flex: 1; flex-direction: column;'>
      <div class='list'>
        <h3>Changes/Edits</h3>
        <ul>
          <li>I will share work-in-progress screenshots during the sketching process. This will be your opportunity to provide feedback. Please be specific and concise.</li>
          <li>Once the final sketch has been approved, I will start working on the final render and will not accept any more requests for edits or changes, unless they have to do with color.</li>
        </ul>
      </div>

      <div class='list'>
        <h3>Rights</h3>
        <ul>
          <li>You will have complete ownership over the finished piece, however you must credit me where appropriate, and I reserve the right to post it to social media and use it to advertise my commissions.</li>
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
