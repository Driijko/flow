<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import { audioBkgTrack } from "../../../scripts/audioBkgStore";
  import { animationsOff } from "../../../scripts/animationsStore";
  import viewportOrientationStore 
  from "../../../scripts/viewport/viewportOrientationStore";
  import Animation2 from "../../6-elements/art/Animation2.svelte";
</script>

<!-- MARKUP /////////////////////////////////////////// -->
<div class:portrait={$viewportOrientationStore === "portrait"}>
  {#if $animationsOff}
    <svg viewBox="0 0 1600 900">
      <rect x="0" y="0" width="1600" height="900" fill="hsl(150, 100%, 70%)"/>
    </svg>
  {:else}
    {#if $audioBkgTrack.name === "Opening Prompt Loop"}
      <Animation2 />
    {/if}
  {/if}
</div>

<!-- STYLES ////////////////////////////////////////// -->
<style>
div.portrait :global(svg) {
  transform: rotate(90deg) scale(2.2);
}
svg {
  width: 100%;
}
</style>
