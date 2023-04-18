<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------------------
  import AudioBkgTrackList from "../../../6-structures/AudioBkgTrackList.svelte";
  import AudioBkgPlayer from "../../../6-structures/AudioBkgPlayer.svelte";
  import VerticalScrollContainer from "../../../5-containers/VerticalScrollContainer.svelte";
  import MonoUARR from "./MonoUARR.svelte";
</script>

<!-- MARKUP //////////////////////////////////////////// -->
<div id="this">
  <MonoUARR>
    <svelte:fragment slot="content">
      <VerticalScrollContainer>
        <AudioBkgTrackList />
      </VerticalScrollContainer>
      <AudioBkgPlayer />
    </svelte:fragment>
  </MonoUARR>
</div>

<!-- STYLE //////////////////////////////////////////////////// -->
<style>
  #this :global(.uarr1) {
    padding-top: 1%;
  }
  #this :global(.vertical-scroll-container) {
    border: 4px solid green;
    height: 80%;
  }
</style>