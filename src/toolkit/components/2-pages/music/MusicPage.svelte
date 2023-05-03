<!-- SCRIPTS ////////////////////////////////////////////////////// -->
<script>
  import viewportOrientationStore 
  from "../../../scripts/viewport/viewportOrientationStore";
  import MusicPagePortrait from "./MusicPagePortrait.svelte";
  import AudioAnimationList 
  from "../../5-structures/audio-bkg/AudioAnimationList.svelte";
</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<div class="uarr-container">
  {#if ($viewportOrientationStore === "landscape")}
    <div class="uarr2">
      <!-- <AudioAnimationList /> -->
    </div>
  {/if}
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