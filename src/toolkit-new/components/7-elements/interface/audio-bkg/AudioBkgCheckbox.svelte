<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------------
  import { audioBkgTogglePausePlay, audioBkgPaused 
  } from "../../../../scripts/audioBkgStore";
  
</script>

<!-- MARKUP /////////////////////////////////////////// -->
<input id="audio-option" type="checkbox" 
  on:click={audioBkgTogglePausePlay} checked={!($audioBkgPaused)} 
/>

<!-- STYLES ////////////////////////////////////////// -->
<style>
  input:checked {
    background-color: grey;
  }
</style>