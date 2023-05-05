<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import { modals } from "../../../../scripts/modalsStore";
  import { audioBkgVolume } from "../../../../scripts/audioBkgStore";
  import AudioVolumeOffIcon from "../../icons/audio/AudioVolumeOffIcon.svelte";
  import AudioVolumeLowIcon from "../../icons/audio/AudioVolumeLowIcon.svelte";
  import AudioVolumeHighIcon from "../../icons/audio/AudioVolumeHighIcon.svelte";
</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" class="audio-bkg-volume-modal-button"
  on:click={()=> modals.toggle("audioVolume")}
  class:volume-off={$audioBkgVolume < 0.03}
  class:volume-low={$audioBkgVolume >= 0.03 && $audioBkgVolume < 0.6}
  class:volume-high={$audioBkgVolume >= 0.6}
>
  {#if $audioBkgVolume < 0.03}
    <AudioVolumeOffIcon title="adjust volume" />
  {:else if $audioBkgVolume >= 0.03 && $audioBkgVolume < 0.6}
    <AudioVolumeLowIcon title="adjust volume" />
  {:else if $audioBkgVolume >= 0.6}
    <AudioVolumeHighIcon title="adjust volume" />
  {/if}
</button>

<!-- STYLES /////////////////////////////////////// -->
<style>
  button :global(svg) {
    width: 100%;
    height: 100%;
  }
  button.volume-off {
    padding: 0.5%;
  }
  button.volume-low {
    padding: 0.5%;
    padding-right: 1%;
  }
  button.volume-high {
    padding: 0.3%;
  }
</style>