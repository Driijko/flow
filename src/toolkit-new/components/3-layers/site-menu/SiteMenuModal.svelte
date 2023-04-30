<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import DualUARR from "../../4-modules/uarr/DualUARR.svelte";
  import SiteMenuPortrait from "./SiteMenuPortrait.svelte";
  import SiteMenuLandscape from "./SiteMenuLandscape.svelte";
</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<div>
  <DualUARR>
    <SiteMenuPortrait slot="portrait-version" />
    <SiteMenuLandscape slot="landscape-version" />
  </DualUARR>
</div>

<!-- STYLES ////////////////////////////////////////////// -->
<style>
  div {
    position: fixed;
    z-index: 1;
  }
</style>