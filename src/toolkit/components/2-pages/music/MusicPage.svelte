<!-- SCRIPTS ////////////////////////////////////////////////////// -->
<script>
  import MusicPagePortrait from "./MusicPagePortrait.svelte";
  import AudioAnimationList 
  from "../../4-layouts/partial/AudioAnimationList.svelte";
  import AudioVolumeModal from "../../3-layers/AudioVolumeModal.svelte";
  import viewportOrientationStore
  from "../../../scripts/viewport/viewportOrientationStore";
</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<AudioVolumeModal />
<div class="uarr-container"
  class:landscape={$viewportOrientationStore === "landscape"}
>
  <div class="uarr2">
    <AudioAnimationList />
  </div>
  <div class="uarr1">
    <MusicPagePortrait />
  </div>
</div>

<!-- STYLES //////////////////////////////////////// -->
<style>
  .uarr-container.landscape {
    background-color: black;
  }
  .uarr1, .uarr2 {
    position: absolute;
  }
  .uarr2 {
    background-color: white;
  }
</style>