<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import modalsStore from "../../../../scripts/modalsStore";
  import audioBkgStore from "../../../../scripts/audioBkgStoreOG";
  import AudioVolumeOffIcon from "../../icons/audio/AudioVolumeOffIcon.svelte";
  import AudioVolumeLowIcon from "../../icons/audio/AudioVolumeLowIcon.svelte";
  import AudioVolumeHighIcon from "../../icons/audio/AudioVolumeHighIcon.svelte";

  // CONDITIONS ---------------------------------------
</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" on:click={()=> modalsStore.toggle("audioVolume")}
  class:volume-off={$audioBkgStore.volume < 0.03}
  class:volume-low={$audioBkgStore.volume >= 0.03 && $audioBkgStore.volume < 0.5}
  class:volume-high={$audioBkgStore.volume >= 0.5}
>
  {#if $audioBkgStore.volume < 0.03}
    <AudioVolumeOffIcon title="adjust volume" />
  {:else if $audioBkgStore.volume >= 0.03 && $audioBkgStore.volume < 0.5}
    <AudioVolumeLowIcon title="adjust volume" />
  {:else if $audioBkgStore.volume >= 0.5}
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