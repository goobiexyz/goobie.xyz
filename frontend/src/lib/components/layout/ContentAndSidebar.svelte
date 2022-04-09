<div class='grid'>
  <div class='content'>
    <slot name='content'></slot>
  </div>

  <div class='sidebar'>
    <slot name='sidebar'></slot>
  </div>
</div>


<style lang='scss'>
  @import 'src/styles/spacing.scss';
  @import 'src/styles/breakpoints.scss';

  .grid {
    display: grid;
    grid-template-columns: auto 30%;
    grid-column-gap: $margin;
  }

  .sidebar {
    border-left: 1px dashed var(--blue);
    padding-left: $margin;
  }

  @media only screen and (max-width: $s) {
    .grid {
      grid-template-columns: auto;
      grid-template-rows: auto auto;
      grid-row-gap: $double-margin;
    }

    .content {
      order: 2;
    }

    .sidebar {
      border: none;
      padding: 0;
      order: 1;
    }
  }
</style>
