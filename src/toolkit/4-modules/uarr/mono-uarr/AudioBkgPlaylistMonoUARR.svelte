<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------------------
  import AudioBkgPlaylist from "../../../6-structures/AudioBkgPlaylist.svelte";
  import MonoUARR from "./MonoUARR.svelte";
</script>

<!-- MARKUP //////////////////////////////////////////// -->
<div id="this">
  <MonoUARR>
    <AudioBkgPlaylist slot="content" />
  </MonoUARR>
</div>

<!-- STYLE //////////////////////////////////////////////////// -->
<style>
  #this :global(.uarr1) {
    padding-top: 1%;
  }
  #this :global(.audio-bkg-track-list) {
    height: 80%;
    overflow-y: scroll;
  }
  #this :global(.audio-bkg-track-list li) {
    border: 1px solid blue;
    height: 14%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 5%;
  }
  #this :global(.audio-bkg-player) {
    height: 19%;
  }
</style>