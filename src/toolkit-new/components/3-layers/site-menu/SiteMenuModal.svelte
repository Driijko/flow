<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import DualUARR from "../../4-modules/uarr/DualUARR.svelte";
  import SiteMenuPortrait from "./SiteMenuPortrait.svelte";
  import SiteMenuLandscape from "./SiteMenuLandscape.svelte";
</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<DualUARR>
  <SiteMenuPortrait slot="portrait-version" />
  <SiteMenuLandscape slot="landscape-version" />
</DualUARR>