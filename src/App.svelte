<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import SiteMenuModal from "./toolkit-new/components/3-layers/site-menu/SiteMenuModal.svelte";
  import SiteMenuTabs from "./toolkit-new/components/6-structures/tabs/SiteMenuTabs.svelte";
  import siteMenuStore from "./toolkit-new/scripts/siteMenuStore";


  setUp();
</script>

<AudioBkg />
<SiteMenuTabs />

<p>{$siteMenuStore.tab}</p>
<p>{$siteMenuStore.navigation.open[0]}</p>
<p>{$siteMenuStore.navigation.open[1]}</p>
<p>{$siteMenuStore.navigation.open[2]}</p>


<!-- STYLES //////////////////////////////// -->
<style>

</style>