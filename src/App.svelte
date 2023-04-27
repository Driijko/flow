<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import SiteMenuModal from "./toolkit-new/components/3-layers/site-menu/SiteMenuModal.svelte";
  import AudioVolumeModalButton from "./toolkit-new/components/7-elements/interface/modals/AudioVolumeModalButton.svelte";
  import AudioVolumeModal from "./toolkit-new/components/3-layers/AudioVolumeModal.svelte";
  import AudioBkgVolumeSlider from "./toolkit-new/components/7-elements/interface/audio-bkg/AudioBkgVolumeSlider.svelte";
  import AudioBkgCheckbox from "./toolkit-new/components/7-elements/interface/audio-bkg/AudioBkgCheckbox.svelte";

  setUp();
</script>

<AudioBkg />
<AudioVolumeModal />
<AudioBkgVolumeSlider />
<div id="this">
  <AudioVolumeModalButton />
  <!-- <AudioBkgCheckbox /> -->
</div>


<!-- STYLES //////////////////////////////// -->
<style>
#this :global(button) {
  width: 50px;
  height: 50px;
  border: 4px solid black;
}
#this :global(input[type="checkbox"]) {
  border: 4px solid black;
}
</style>