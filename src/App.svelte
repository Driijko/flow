<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit/scripts/setUp";
  import AudioBkg from "./toolkit/components/1-site/AudioBkg.svelte";
  import SiteMenuModal 
  from "./toolkit/components/3-layers/site-menu/SiteMenuModal.svelte";
  import Technologies from "./toolkit/components/5-structures/content/Technologies.svelte";

  setUp();
</script>
<AudioBkg />
<Technologies />

<!-- STYLES //////////////////////////////// -->
<style>
:global(.audio-bkg-pause-play-button) {
  border-width: 10px;
  width: 100px;
  height: 100px;
}
:global(.audio-bkg-player) {
  display: none;
}
</style>