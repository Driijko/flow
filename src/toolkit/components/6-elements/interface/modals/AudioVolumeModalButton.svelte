<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import { modals } from "../../../../scripts/modalsStore";
  import { audioBkgVolume, audioBkgFading } 
  from "../../../../scripts/audioBkgStore";
  import AudioVolumeOffIcon from "../../icons/audio/AudioVolumeOffIcon.svelte";
  import AudioVolumeLowIcon from "../../icons/audio/AudioVolumeLowIcon.svelte";
  import AudioVolumeHighIcon from "../../icons/audio/AudioVolumeHighIcon.svelte";

  // STATE ----------------------------------------------
  let volume = $audioBkgVolume;

  // REACTIVE -----------------------------------------
  $: if ($audioBkgFading === false) {
    volume = $audioBkgVolume;
  };

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" class="audio-bkg-volume-modal-button"
  on:click={()=> modals.toggle("audioVolume")}
  class:volume-off={volume < 0.03}
  class:volume-low={volume >= 0.03 && volume < 0.5}
  class:volume-high={volume >= 0.5}
>
  {#if volume < 0.03}
    <AudioVolumeOffIcon title="adjust volume" />
  {:else if volume >= 0.03 && volume < 0.5}
    <AudioVolumeLowIcon title="adjust volume" />
  {:else if volume >= 0.5}
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