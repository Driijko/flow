<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  import { audioBkgTrack } from "../../../scripts/audioBkgStore";
  import Animation2 from "../../6-elements/art/Animation2.svelte";
  import PlaylistModalOpenerButton
  from "../../6-elements/interface/modals/PlaylistModalOpenerButton.svelte";
  import shift from "../../../scripts/transitions/shift";
  import { playlistModal } from "../../../scripts/modalsStore";
  import { cubicIn } from "svelte/easing";
</script>

<!-- MARKUP /////////////////////////////////////////// -->
{#if !($playlistModal)}
  <div id="this"
    in:shift="{{y:-400, duration:500}}"
    out:shift="{{y:-400, duration: 500, easing: cubicIn}}"
  >
    <PlaylistModalOpenerButton />
  </div>
{/if}

{#if $audioBkgTrack.name === "Opening Prompt Loop"}
  <Animation2 />
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
#this :global(.playlist-modal-opener-button svg) {
  width: 40%;
}
#this :global(.playlist-modal-opener-button path) {
  fill: white;
}
</style>
