<!-- SCRIPTS ///////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import DualUARR from "../../4-modules/uarr/DualUARR.svelte";
  import SplashPortrait from "./SplashPortrait.svelte";
  import SplashLandscape from "./SplashLandscape.svelte";
</script>

<!-- MARKUP ////////////////////////////////// -->
<DualUARR>
  <SplashPortrait slot="portrait-version" />
  <SplashLandscape slot="landscape-version" />
</DualUARR>