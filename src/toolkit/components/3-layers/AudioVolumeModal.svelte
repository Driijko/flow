<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------
  import { audioVolumeModal } from "../../scripts/modalsStore";
  import { modals } from "../../scripts/modalsStore";
  import AudioBkgVolumeSlider 
  from "../6-elements/interface/audio-bkg/AudioBkgVolumeSlider.svelte";
</script>

<!-- MARKUP ////////////////////////////////// -->
{#if $audioVolumeModal}
<dialog class="vp">
  <div class="background">
    <button type="button" on:click={()=> modals.close("audioVolume")}>
    </button>
  </div>
  <div class="container">
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
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>