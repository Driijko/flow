<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import SiteMenuModal from "./toolkit-new/components/3-layers/site-menu/SiteMenuModal.svelte";
  import AudioBkgTimer from "./toolkit-new/components/6-structures/AudioBkgTimer.svelte";
  import AudioBkgCheckbox from "./toolkit-new/components/7-elements/interface/audio-bkg/AudioBkgCheckbox.svelte";

  setUp();
</script>

<AudioBkg />
<AudioBkgTimer />
<div id="this">
  <AudioBkgCheckbox />
</div>

<!-- STYLES //////////////////////////////// -->
<style>
#this :global(input[type="checkbox"]) {
  border: 4px solid black;
}
</style>