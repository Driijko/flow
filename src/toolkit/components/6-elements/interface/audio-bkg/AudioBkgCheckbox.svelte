<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------------
  import { audioBkgTogglePausePlay, audioBkgPaused } 
  from "../../../../scripts/audioBkgStore";
  
</script>

<!-- MARKUP /////////////////////////////////////////// -->
<input id="audio-option" type="checkbox" class="audio-bkg-checkbox" 
  on:click={audioBkgTogglePausePlay} checked={!($audioBkgPaused)} 
/>

<!-- STYLES ////////////////////////////////////////// -->
<style>
  input {
    border-color: black;
    border-style: solid;
  }
  input:checked {
    background-color: grey;
  }
</style>