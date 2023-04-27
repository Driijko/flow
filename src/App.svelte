<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import SiteMenuModal from "./toolkit-new/components/3-layers/site-menu/SiteMenuModal.svelte";
  import AudioBkgTimer from "./toolkit-new/components/6-structures/AudioBkgTimer.svelte";
  import AudioBkgCheckbox from "./toolkit-new/components/7-elements/interface/audio-bkg/AudioBkgCheckbox.svelte";
  import siteMenuStore from "./toolkit-new/scripts/siteMenuStore";
  import SiteMenuBreadcrumbs from "./toolkit-new/components/6-structures/SiteMenuBreadcrumbs.svelte";

  setUp();
</script>

<AudioBkg />
<SiteMenuBreadcrumbs />


<!-- STYLES //////////////////////////////// -->
<style>
.hor-free-scroll {
  width: 500px;
  height: 500px;
  border: 4px solid green;
}
.test {
  border: 4px solid blue;
  width: 50%;
}
</style>