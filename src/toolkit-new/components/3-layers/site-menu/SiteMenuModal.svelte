<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import DualUARR from "../../4-modules/uarr/DualUARR.svelte";
  import SiteMenuPortrait from "./SiteMenuPortrait.svelte";
  import SiteMenuLandscape from "./SiteMenuLandscape.svelte";
  import viewportOrientationStore from "../../../scripts/viewport/viewportOrientationStore";
  import { siteMenuModal } from "../../../scripts/modalsStore";
</script>

<!-- MARKUP ///////////////////////////////////////////// -->

<div class="uarr-container" class:open={$siteMenuModal}>
  <div class="uarr">
    {#if $viewportOrientationStore === "portrait"}
      <SiteMenuPortrait />
    {:else}
      <SiteMenuLandscape />
    {/if}
  </div>
</div>

<!-- STYLES ////////////////////////////////////////////// -->
<style>
  div.uarr-container {
    position: fixed;
    z-index: 1;
  }
  div.uarr-container.open {
    background-color: white;
  }
</style>