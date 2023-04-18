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
    padding-top: calc(var(--uarr1-height) * 0.01);
  }
  #this :global(.vertical-scroll-container) {
    height: 76%;
    margin-bottom: 4%;
  }
  #this :global(.vertical-scroll-container-marker) {
    border: 1px solid black;
  }
  #this :global(.audio-bkg-track-list) {
    padding: calc(var(--uarr1-height) * 0.05) 0;
    font-size: calc(var(--uarr1-width)/16.9);
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: calc(var(--uarr1-height) * 0.05);
  }
  #this :global(.audio-bkg-track-list li) {
    text-align: center;
  }
  #this :global(.audio-bkg-player) {
    height: 20%;
  }
</style>