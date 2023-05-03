<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------
  import { fade } from "svelte/transition";
  import { audioVolumeModal } from "../../scripts/modalsStore";
  import { modals } from "../../scripts/modalsStore";
  import AudioBkgVolumeSlider 
  from "../6-elements/interface/audio-bkg/AudioBkgVolumeSlider.svelte";
</script>

<!-- MARKUP ////////////////////////////////// -->
{#if $audioVolumeModal}
<dialog class="vp">
  <div class="background" 
    in:fade="{{duration:200}}"
    out:fade="{{duration:200, delay:300}}"
  >
    <button type="button" on:click={()=> modals.close("audioVolume")}>
    </button>
  </div>
  <div class="container" 
    in:fade="{{duration:200, delay:300}}"
    out:fade="{{duration:200}}"
  >
    <AudioBkgVolumeSlider axis="vertical" />
  </div>
</dialog>
{/if}

<!-- STYLES //////////////////////////////////// -->
<style>
  dialog {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }
  .background {
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 0%, 0.7);
  }
  button {
    width: 100%;
    height: 100%;
  }
  .container {
    position: relative;
    width: 70%;
    height: 60%;
    border-radius: 5%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>