<!-- SCRIPTS ////////////////////////////////////////////////////// -->
<script>
  import MusicPagePortrait from "./MusicPagePortrait.svelte";
  import AudioAnimationList 
  from "../../5-structures/audio-bkg/AudioAnimationList.svelte";
  import AudioVolumeModal from "../../3-layers/AudioVolumeModal.svelte";
</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<AudioVolumeModal />
<div class="uarr-container">
  <div class="uarr2">
    <AudioAnimationList />
  </div>
  <div class="uarr1">
    <MusicPagePortrait />
  </div>
</div>

<!-- STYLES //////////////////////////////////////// -->
<style>
  .uarr1, .uarr2 {
    position: absolute;
  }
</style>