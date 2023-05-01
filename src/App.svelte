<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import SiteMenuModal 
  from "./toolkit-new/components/3-layers/site-menu/SiteMenuModal.svelte";
  import Background 
  from "./toolkit-new/components/7-elements/art/Background.svelte";
  import SplashPage 
  from "./toolkit-new/components/2-pages/splash/SplashPage.svelte";
  import AudioBkgPlayer 
  from "./toolkit-new/components/6-structures/audio-bkg/AudioBkgPlayer.svelte";
  import AudioBkgPlaylist 
  from "./toolkit-new/components/6-structures/audio-bkg/AudioBkgPlaylist.svelte";
  import MusicPage 
  from "./toolkit-new/components/2-pages/music/MusicPage.svelte";

  setUp();
</script>
<!-- <Background /> -->
<AudioBkg />
<SiteMenuModal />
<MusicPage />





<!-- STYLES //////////////////////////////// -->
<style>
p {
  position: absolute;
  top: 70%;
}
:global(input[type="checkbox"]) {
  border: 4px solid black;
}
</style>