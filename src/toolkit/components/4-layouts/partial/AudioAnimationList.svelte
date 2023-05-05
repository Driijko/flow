<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import { audioBkgTrack } from "../../../scripts/audioBkgStore";
  import viewportOrientationStore 
  from "../../../scripts/viewport/viewportOrientationStore";
  import Animation2 from "../../6-elements/art/Animation2.svelte";
</script>

<!-- MARKUP /////////////////////////////////////////// -->
{#if $audioBkgTrack.name === "Opening Prompt Loop"}
  <div class:portrait={$viewportOrientationStore === "portrait"}>
    <Animation2 />
  </div>
{/if}

<!-- STYLES ////////////////////////////////////////// -->
<style>
div.portrait :global(svg) {
  transform: rotate(90deg) scale(2.2);
}
</style>
