<!-- SCRIPTS //////////////////////////// -->
<script>
  import DualUARR from "../../4-layouts/reponsive/uarr/DualUARR.svelte";
  import OpeningPromptPortrait from "./OpeningPromptPortrait.svelte";
  import OpeningPromptLandscape from "./OpeningPromptLandscape.svelte";
</script>

<!-- MARKUP ////////////////////////////// -->
<DualUARR>
  <OpeningPromptPortrait slot="portrait-version" />
  <OpeningPromptLandscape slot="landscape-version" />
</DualUARR>