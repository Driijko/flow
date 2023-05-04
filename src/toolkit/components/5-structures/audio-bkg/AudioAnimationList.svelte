<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import { audioBkgTrack } from "../../../scripts/audioBkgStore";
  import viewportOrientationStore 
  from "../../../scripts/viewport/viewportOrientationStore";
  import Animation2 from "../../6-elements/art/Animation2.svelte";
  import PlaylistModalOpenerButton
  from "../../6-elements/interface/modals/PlaylistModalOpenerButton.svelte";
  import shift from "../../../scripts/transitions/shift";
  import { playlistModal } from "../../../scripts/modalsStore";
  import { cubicIn } from "svelte/easing";

</script>

<!-- MARKUP /////////////////////////////////////////// -->
{#if !($playlistModal)}
  <div id="this" class:portrait={$viewportOrientationStore === "portrait"}
    in:shift="{{y:-400, duration:500}}"
    out:shift="{{y:-400, duration: 500, easing: cubicIn}}"
  >
    <PlaylistModalOpenerButton />
  </div>
{/if}

{#if $audioBkgTrack.name === "Opening Prompt Loop"}
  <div class:portrait={$viewportOrientationStore === "portrait"}>
    <Animation2 />
  </div>
{/if}

<!-- STYLES ////////////////////////////////////////// -->
<style>
#this {
  position: absolute;
  width: 100%;
  height: 100%;
}
#this :global(.playlist-modal-opener-button) {
  background-color: black;
  position: absolute;
  left: 89%;
  width: 5%;
  height: 8%;
}
div.portrait :global(svg) {
  border: 4px solid green;
  transform: rotate(90deg) scale(1.8);
}
#this :global(.playlist-modal-opener-button svg) {
  width: 40%;
}
#this :global(.playlist-modal-opener-button path) {
  fill: white;
}
</style>
