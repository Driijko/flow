<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import audioBkgStore from "./audioBkgStore";

  // ELEMENT REFERENCE ------------------------------------
  let audioBkgElement;
</script>

<audio controls bind:this={audioBkgElement} id="audio-bkg"
  src={$audioBkgStore.trackPath} bind:paused={$audioBkgStore.paused}
  bind:volume={$audioBkgStore.volume}
></audio>