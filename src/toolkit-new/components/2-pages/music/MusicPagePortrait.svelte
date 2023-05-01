<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  import AudioBkgPlaylist 
  from "../../6-structures/audio-bkg/AudioBkgPlaylist.svelte";
</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<div id="this">
  <AudioBkgPlaylist />
</div>

<!-- STYLES ///////////////////////////////////////////// -->
<style>
#this {
  width: 100%;
  height: 100%;
}
@media screen and (orientation: portrait) {
#this :global(.audio-bkg-playlist) {
  height: 92%;
}
}
@media screen and (orientation: landscape) {
#this :global(.audio-bkg-playlist) {
  height: 100%;
}
}
#this :global(.audio-bkg-tracklist) {
  border: 4px solid green;
  height: 80%;
  overflow-y: scroll;
  scrollbar-width: none;
}

#this :global(.audio-bkg-tracklist::-webkit-scrollbar) {
  display: none;
}

</style>