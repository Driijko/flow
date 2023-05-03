<!-- SCRIPTS ////////////////////////////////////////////////////// -->
<script>
  import viewportOrientationStore 
  from "../../../../scripts/viewport/viewportOrientationStore";
</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<div class="uarr-container">
  {#if ($viewportOrientationStore === "landscape")}
    <div class="uarr2"></div>
  {/if}
  <div class="uarr1">
    <slot name="content" />
  </div>
</div>

<!-- STYLES //////////////////////////////////////////////////////// -->
<style>
  .uarr1 {
    position: absolute;
    background-color: hsl(0, 0%, 95%);
  }
  .uarr2 {
    border: 4px solid blue;
    position: absolute;
  }
</style>