<!-- SCRIPTS ////////////////////////////////////////////////////// -->
<script>
  import viewportOrientationStore from "../1-site/viewport/viewportOrientationStore";
</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<div class="uarr-container">
  {#if ($viewportOrientationStore === "landscape")}
    <div class="uarr2"></div>
  {/if}
  <div class="uarr1"></div>
</div>

<!-- STYLES //////////////////////////////////////////////////////// -->
<style>
  .uarr1 {
    border: 4px solid red;
    position: absolute;
  }
  .uarr2 {
    border: 4px solid blue;
    position: absolute;
  }
</style>