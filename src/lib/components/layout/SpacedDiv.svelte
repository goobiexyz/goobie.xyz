<div><slot></slot></div>


<style lang='scss'>
  @import 'src/styles/spacing.scss';
  
  div :global(>*:not(:first-child)) {
    margin-top: $margin;
  }
</style>
