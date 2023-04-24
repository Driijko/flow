<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import SplashPage from "./toolkit-new/components/2-pages/splash/SplashPage.svelte";
  import SiteMenuModal from "./toolkit-new/components/3-layers/site-menu/SiteMenuModal.svelte";
  import modalsStore from "./toolkit-new/scripts/modalsStore";
  import SiteMenuModalButton from "./toolkit-new/components/7-elements/interface/modals/SiteMenuModalButton.svelte";
  import SiteMenuModalTabs from "./toolkit-new/components/6-structures/tabs/SiteMenuModalTabs.svelte";

  setUp();
</script>

<AudioBkg />
<SiteMenuModalTabs />