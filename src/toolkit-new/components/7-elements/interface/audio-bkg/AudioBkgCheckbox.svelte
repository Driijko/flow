<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------------
  import audioBkgStore from "../../../../scripts/audioBkgStoreOG";
</script>

<!-- MARKUP /////////////////////////////////////////// -->
<input id="audio-option" type="checkbox" on:click={audioBkgStore.togglePaused} checked={!($audioBkgStore.paused)} />

<!-- STYLES ////////////////////////////////////////// -->
<style>
  input:checked {
    background-color: grey;
  }
</style>