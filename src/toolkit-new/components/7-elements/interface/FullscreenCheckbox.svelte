<!-- SCRIPTS ///////////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------------
  import { onDestroy } from "svelte";
  import fullscreen from "../../../scripts/viewport/fullscreen";

  // STATE ---------------------------------------------------
  let fullscreenStatus;
  function setFullscreenStatus() {
    if (document.fullscreenElement) {
      fullscreenStatus = true;
    } else {
      fullscreenStatus = false;
    }
  }
  setFullscreenStatus();
  document.addEventListener("fullscreenchange", setFullscreenStatus);
  onDestroy(()=> {
    document.removeEventListener("fullscreenchange", setFullscreenStatus);
  });

  // EVENT HANDLERS ---------------------------------------
  function toggleFullscreen(e) {
    fullscreen(e.target.checked);
  }
</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<input id="fullscreen-option" type="checkbox" on:click={toggleFullscreen}   checked={fullscreenStatus}
/>

<style>
  input {
    border: 4px solid black;
  }
  input:checked {
    background-color: grey;
  }
</style>
