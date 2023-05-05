<!-- SCRIPTS ///////////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------------
  import { onDestroy } from "svelte";
  import fullscreen from "../../../scripts/viewport/fullscreen";

  // STATE ---------------------------------------------------
  let fullscreenStatus;

  // STATE FUNCTIONS ---------------------------------------
  function setFullscreenStatus() {
    if (document.fullscreenElement) {
      fullscreenStatus = true;
    } else {
      fullscreenStatus = false;
    }
  };

  // RUN ON INITIALIZATION ----------------------------------
  setFullscreenStatus();

  // EVENT LISTENERS ---------------------------------------
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
<input id="fullscreen-option" type="checkbox" 
  on:click={toggleFullscreen} checked={fullscreenStatus}
/>

<!-- STYLES ////////////////////////////////////////// -->
<style>
  input:checked {
    background-color: grey;
  }
</style>
