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
#this :global(.audio-bkg-playlist h2) {
  height: 8%;
  display: flex;
  align-items: center;
  padding-left: calc(var(--uarr1-width)/20);
}
#this :global(.audio-bkg-tracklist) {
  border: calc(var(--uarr1-width)/100) solid black;
  height: 69%;
  overflow-y: scroll;
  scrollbar-width: none;
  padding-left: calc(var(--uarr1-width)/20);
  padding-top: calc(var(--uarr1-width)/50);
  padding-bottom: calc(var(--uarr1-width)/5);
  font-size: calc(var(--uarr1-width)/17);
}
#this :global(.audio-bkg-tracklist li) {
  height: 15%;
  display: flex;
}
#this :global(.audio-bkg-tracklist::-webkit-scrollbar) {
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