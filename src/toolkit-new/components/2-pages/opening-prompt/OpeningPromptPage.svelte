<!-- SCRIPTS //////////////////////////// -->
<script>
  import DualUARR from "../../4-modules/uarr/DualUARR.svelte";
  import OpeningPromptPortrait from "./OpeningPromptPortrait.svelte";
  import OpeningPromptLandscape from "./OpeningPromptLandscape.svelte";
</script>

<!-- MARKUP ////////////////////////////// -->
<DualUARR>
  <OpeningPromptPortrait slot="portraitVersion" />
  <OpeningPromptLandscape slot="landscapeVersion" />
</DualUARR>