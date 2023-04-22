<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------------
  import audioBkgStore from "../../../../scripts/audioBkgStore";
</script>

<!-- MARKUP /////////////////////////////////////////// -->
<input type="checkbox" on:click={audioBkgStore.togglePaused} checked={!($audioBkgStore.paused)} />

<!-- STYLES ////////////////////////////////////////// -->
<style>
  input {
    border: 4px solid black;
  }
  input:checked {
    background-color: grey;
  }
</style>