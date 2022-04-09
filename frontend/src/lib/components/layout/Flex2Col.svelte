<script>
  export let noBreak = false
  export let halfnhalf = false
  export let margin = 'single'
</script>


<div class="flex-2-col m-{margin}" class:noBreak class:halfnhalf>
  <div class='col-1'><slot name='col-1'></slot></div>
  <div class='col-2'><slot name='col-2'></slot></div>
</div>


<style lang="scss">
  @import 'src/styles/breakpoints.scss';
  @import 'src/styles/spacing.scss';

  .flex-2-col {
    display: flex;

    &.halfnhalf {
      .col-1, .col-2 {
        flex: 1;
      }
    }
  }

  .m- {
    &single {
      .col-1 {
        margin-right: $half-margin;
      }
      .col-2 {
        margin-left: $half-margin;
      }
    }

    &double {
      .col-1 {
        margin-right: $margin;
      }
      .col-2 {
        margin-left: $margin;
      }
    }
  }



  @media only screen and (max-width: $ss) {
    .flex-2-col:not(.noBreak) {
      flex-direction: column;
      align-items: center;

      .col-2 {
        margin-top: $margin;
      }
    }
  }
</style>
