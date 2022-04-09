<script lang='coffee'>
  export thumb = ''
  export name = ''
  export price = ''
  export notes = ''
</script>


<div class='comm-opt-card'>
  <img src={thumb} alt='' />
  <div class='opt-info'>
    <h4>{name}</h4>
    <span class='price'>{price}</span>
    <div class='slot-container'>
      <slot></slot>
    </div>    
  </div>
</div>
