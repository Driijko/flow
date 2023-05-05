<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import AudioBkgPlaylist 
  from "../../5-structures/audio-bkg/AudioBkgPlaylist.svelte";
  import PlaylistModalCloserButton 
  from "../../6-elements/interface/modals/PlaylistModalCloserButton.svelte";
  import { playlistModal } from "../../../scripts/modalsStore";
  import shift from "../../../scripts/transitions/shift";
  
</script>

<!-- MARKUP ///////////////////////////////////////////// -->
{#if $playlistModal }
  <div id="this" 
    in:shift="{{y: -window.innerHeight, duration: 500}}"
    out:shift="{{y: -window.innerHeight, duration: 500}}"
  >
    <PlaylistModalCloserButton />
    <AudioBkgPlaylist identifier="playlist1" />
  </div>
{/if}

<!-- STYLES ///////////////////////////////////////////// -->
<style>
#this {
  width: 100%;
  height: 100%;
}
@media screen and (orientation: portrait) {
  #this :global(.audio-bkg-playlist-section) {
    height: 92%;
  }
}
@media screen and (orientation: landscape) {
  #this :global(.audio-bkg-playlist-section) {
    height: 100%;  
  }
}
#this :global(.playlist-modal-closer-button svg) {
  width: 60%;
}
#this :global(.playlist-modal-closer-button) {
  border: calc(var(--uarr1-width)/100) solid black;
  position: absolute;
  height: 7.9%;
  width: 15%;
  left: 85%;
}
@media screen and (orientation: landscape) {
  #this :global(.playlist-modal-closer-button) {
    height: 8.4%;
  }
}
#this :global(.audio-bkg-playlist-section h2) {
  height: 8%;
  display: flex;
  align-items: center;
  padding-left: calc(var(--uarr1-width)/20);
  font-size: calc(var(--uarr1-width)/13);
  border-left: calc(var(--uarr1-width)/20) solid black;
  border-top: calc(var(--uarr1-width)/100) solid black;
}
#this :global(.audio-bkg-playlist) {
  border: calc(var(--uarr1-width)/100) solid black;
  height: 69%;
  overflow-y: scroll;
  scrollbar-width: none;
  padding-left: calc(var(--uarr1-width)/20);
  padding-top: calc(var(--uarr1-width)/50);
  padding-bottom: calc(var(--uarr1-width)/5);
  font-size: calc(var(--uarr1-width)/17);
}
#this :global(.audio-bkg-playlist li) {
  height: 15%;
  display: flex;
}
#this :global(.audio-bkg-playlist::-webkit-scrollbar) {
  display: none;
}
#this :global(.audio-bkg-player) {
  position: relative;
  padding-top: calc(var(--uarr1-width)/19);
  border: calc(var(--uarr1-width)/100) solid black;
  height: 23%;
}
#this :global(.audio-bkg-player h3) {
  text-align: center;
  font-size: calc(var(--uarr1-width)/15);
}
#this :global(.audio-bkg-pause-play-button) {
  position: absolute;
  height: 40%;
  width: 16%;
  border: calc(var(--uarr1-width)/200) solid black;
  top: 45%;
  left: 10%;
}
#this :global(.audio-bkg-timer) {
  position: absolute;
  font-size: calc(var(--uarr1-width)/17);
  width: 50%;
  text-align: center;
  left: 25%;
  top: 55%;
}
#this :global(.audio-bkg-volume-modal-button) {
  position: absolute;
  height: 40%;
  width: 16%;
  border: calc(var(--uarr1-width)/200) solid black;
  top: 45%;
  left: 72%;
  padding: calc(var(--uarr1-width)/50);
}
</style>