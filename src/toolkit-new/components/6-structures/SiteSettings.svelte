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
    <div>
      <FullscreenCheckbox />
    </div>
  </div>
  <div class="settings-option">
    <label for="audio-option">Audio</label>
    <div>
      <AudioBkgCheckbox />
    </div>
  </div>
  <div id="volume-adjust" class:visible={!($audioBkgStore.paused)}>
    <label for="volume">Adjust volume to your preference:</label>
    <AudioBkgVolumeSlider />
  </div>
</div>

<!-- STYLES ////////////////////////////////////////// -->