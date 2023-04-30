<!-- SCRIPTS ///////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import SplashPortrait from "./SplashPortrait.svelte";
  import SplashLandscape from "./SplashLandscape.svelte";
  import viewportOrientationStore 
  from "../../../scripts/viewport/viewportOrientationStore";
</script>

<!-- MARKUP ////////////////////////////////// -->
<div class="uarr-container">
  <div class="uarr">
    {#if $viewportOrientationStore === "portrait"}
      <SplashPortrait />
    {:else}
      <SplashLandscape />
    {/if}
  </div>
</div>

<!-- STYLES ///////////////////////////////////// -->
<style>
.uarr-container {
  background-color: black;
}
.uarr {
  background-color: white;
}
</style>