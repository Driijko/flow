<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import audioBkgStore from "../../scripts/audioBkgStore";
  import FullscreenCheckbox from "../7-elements/interface/FullscreenCheckbox.svelte";
  import AudioBkgCheckbox from "../7-elements/interface/audio-bkg/AudioBkgCheckbox.svelte";
  import AudioBkgVolumeSlider from "../7-elements/interface/audio-bkg/AudioBkgVolumeSlider.svelte";

</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<div class="site-settings">
  <div class="site-settings-option">
    <label for="fullscreen-option">Fullscreen</label>
    <FullscreenCheckbox />
  </div>
  <div class="site-settings-option">
    <label for="audio-option">Audio</label>
    <AudioBkgCheckbox />
  </div>
  <div class="volume-adjust" class:visible={!($audioBkgStore.paused)}>
    <label for="volume">Adjust volume to your preference:</label>
    <AudioBkgVolumeSlider />
  </div>
</div>

<!-- STYLES ////////////////////////////////////////// -->
<style>
  .volume-adjust {
    transform: scaleY(0);
    transition: transform 1s ease-out;
  }
  .volume-adjust.visible {
    transform: scaleY(1);
  }
</style>