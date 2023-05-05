<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit/scripts/setUp";
  import AudioBkg from "./toolkit/components/1-site/AudioBkg.svelte";
  import SiteMenuModal 
  from "./toolkit/components/3-layers/site-menu/SiteMenuModal.svelte";
  import Technologies from "./toolkit/components/5-structures/content/Technologies.svelte";
  import MusicPage from "./toolkit/components/2-pages/music/MusicPage.svelte";
  import AudioVolumeModal from "./toolkit/components/3-layers/AudioVolumeModal.svelte";
  import { currentPage } from "./toolkit/scripts/currentPageStore";

  setUp();

</script>

<!-- MARKUP ///////////////////////////////////// -->
<AudioBkg />
<SiteMenuModal />
<MusicPage />

<!-- STYLES //////////////////////////////// -->
<style>

</style>