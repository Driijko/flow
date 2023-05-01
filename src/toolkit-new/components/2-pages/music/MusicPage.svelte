<!-- SCRIPTS ////////////////////////////////////////////////////// -->
<script>
  import viewportOrientationStore 
  from "../../../scripts/viewport/viewportOrientationStore";
  import MusicPagePortrait from "./MusicPagePortrait.svelte";
</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<div class="uarr-container">
  {#if ($viewportOrientationStore === "landscape")}
    <div class="uarr2"></div>
  {/if}
  <div class="uarr1">
    <MusicPagePortrait />
  </div>
</div>

<!-- STYLES //////////////////////////////////////// -->
<style>
  .uarr1, .uarr2 {
    position: absolute;
  }
</style>