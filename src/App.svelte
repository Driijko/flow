<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit/scripts/setUp";
  import AudioBkg from "./toolkit/components/1-site/AudioBkg.svelte";
  import SiteMenuModal 
  from "./toolkit/components/3-layers/site-menu/SiteMenuModal.svelte";
  import { audioBkgCurrentPlaylist, audioBkgCurrentPlaylistIndex,
    audioBkgNewPlaylist, audioBkgUpdateCurrentPlaylistIndex, 
    audioBkgNextPlaylistTrack
  } from "./toolkit/scripts/audioBkgStore";

  setUp();
</script>

<p>
  Tracklist name: {$audioBkgCurrentPlaylist.name}
</p>




<!-- STYLES //////////////////////////////// -->
<style>
:global(.audio-bkg-pause-play-button) {
  border-width: 10px;
  width: 100px;
  height: 100px;
}
</style>