<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import SiteMenuModal from "./toolkit-new/components/3-layers/site-menu/SiteMenuModal.svelte";
  import AudioBkgTimer from "./toolkit-new/components/6-structures/AudioBkgTimer.svelte";
  import AudioBkgCheckbox from "./toolkit-new/components/7-elements/interface/audio-bkg/AudioBkgCheckbox.svelte";
  import siteMenuStore from "./toolkit-new/scripts/siteMenuStore";

  setUp();
</script>

<AudioBkg />
<p>{$siteMenuStore.tab}</p>
<p>{$siteMenuStore.nav.open[0]}</p>
<p>{$siteMenuStore.nav.open[1]}</p>
<p>{$siteMenuStore.nav.open[2]}</p>
<p>{$siteMenuStore.nav.current}</p>

<button type="button" on:click={()=> siteMenuStore.expandNav("music")}>
  expand
</button>

<button type="button" on:click={()=> siteMenuStore.collapseNav("blues",1)}>
  collapse
</button>

<!-- STYLES //////////////////////////////// -->
<style>

</style>