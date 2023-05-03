<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit/scripts/setUp";
  import AudioBkg from "./toolkit/components/1-site/AudioBkg.svelte";
  import MusicPage from "./toolkit/components/2-pages/music/MusicPage.svelte";
  import SiteMenuModal 
  from "./toolkit/components/3-layers/site-menu/SiteMenuModal.svelte";
  import AudioVolumeModal 
  from "./toolkit/components/3-layers/AudioVolumeModal.svelte";


  setUp();
</script>
<AudioBkg />
<SiteMenuModal />
<MusicPage />
<AudioVolumeModal />



<!-- STYLES //////////////////////////////// -->
<style>
:global(.audio-bkg-pause-play-button) {
  border-width: 10px;
  width: 100px;
  height: 100px;
}
</style>