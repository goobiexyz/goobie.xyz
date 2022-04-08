<div out:slide|local>
  <Dfs.Section simple='true'>
    <div style='text-align: center'>
      <SpacedDiv>
        <p>The contact form that you request<br />
        Is locked behind a simple test.
        </p>

        <p>Answer my riddle and prove to me<br />
        That you're a real human indeed.
        </p>

        <p>Everyone should have one of these,<br />
        But to get inside you'll need some keys.
        </p>

        <p>A room for you to have a bite,<br />
        A room to sleep in bed at night.
        </p>

        <p>Inside my walls you'll often roam.<br />
        There simply is no place like <input class='secret-code' type='text' placeholder='your answer' style='width: 125px' bind:value={answer}/>
        </p>

        <Button bg='blue' color='white' on:click={checkAnswer}>Check Answer</Button>
      </SpacedDiv>
    </div>
  </Dfs.Section>
</div>
