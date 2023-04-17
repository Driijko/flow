<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------------
  import audioBkgStore from "../1-site/audio/bkg/audioBkgStore";
  import AudioBkgPausePlayButton from "../6-elements/AudioBkgPausePlayButton.svelte";
  import AudioBkgVolumeSlider from "../6-elements/AudioBkgVolumeSlider.svelte";
</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<div class="audio-bkg-player">
  <div>
    <h1>{$audioBkgStore.track.name}</h1>
  </div>
  <div>
    <AudioBkgPausePlayButton />
    <AudioBkgVolumeSlider />
  </div>
</div>

<!-- STYLES /////////////////////////////////////////////// -->
<style>
.audio-bkg-player {
  border: 4px solid blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100px;
}
.audio-bkg-player div:nth-of-type(1) {
  border: 1px solid green;
  height: 33%;
  display: flex;
  align-items: center;
}
.audio-bkg-player div:nth-of-type(2) {
  height: 66%;
  border: 1px solid blue;
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>