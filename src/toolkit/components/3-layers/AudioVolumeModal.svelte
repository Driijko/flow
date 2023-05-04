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
<dialog class="uarr-container">
  <div class="background" 
    in:fade="{{duration:200}}"
    out:fade="{{duration:200, delay:300}}"
  >
    <button type="button" on:click={()=> modals.close("audioVolume")}>
    </button>
  </div>
  <div class="uarr">
    <div class="container" 
      in:fade="{{duration:200, delay:300}}"
      out:fade="{{duration:200}}"
    >
      <p>Adjust volume to your preference:</p>
      <AudioBkgVolumeSlider axis="vertical" />
    </div>
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
  background-color: hsla(0, 0%, 0%, 0.7);
}
button {
  width: 100%;
  height: 100%;
}
.uarr {
  pointer-events: none;
}
.container {
  position: absolute;
  pointer-events: initial;
  background-color: white;
}
.container :global(.audio-bkg-volume-slider) {
  display: block;
}
@media screen and (orientation: portrait) {
  .container {
    left: 10%;
    top: 10%;
    width: 80%;
    height: 80%;
    border-radius: calc(var(--uarr1-width)/10);
  }
  .container > :global(*) {
    position: absolute;
  }
  p {
    line-height: 1.3;
    text-align: center;
    width: 70%;
    left: 15%;
    top: 12%;
    font-size: calc(var(--uarr1-width)/15);
  }
  .container :global(.audio-bkg-volume-slider) {
    top: 55%;
    left: -1%;
    width: calc(var(--uarr1-width)/1.2);
    height: calc(var(--uarr1-width)/7);
  }
  .container :global(input[type="range"]::-webkit-slider-runnable-track) {
    background-color: transparent;
    border-style: solid;
    border-color: black;
    border-width: calc(var(--uarr1-width)/100);
    height: calc(var(--uarr1-width)/15);
    width: calc(var(--uarr1-width)/100);
    border-radius: calc(var(--uarr1-width)/10);
  }
  .container :global(input[type="range"]::-moz-range-track) { 
    background-color: transparent;
    border-style: solid;
    border-color: black;
    border-width: calc(var(--uarr1-width)/100);
    height: calc(var(--uarr1-width)/15);
    width: calc(var(--uarr1-width)/1.5);
    border-radius: calc(var(--uarr1-width)/10);
  }
  .container :global(input[type="range"]::-webkit-slider-thumb) {
    background-color: grey; 
    border-style: solid;
    border-color: black;
    border-width: calc(var(--uarr1-width)/100);
    border-radius: calc(var(--uarr1-width)/10);
    width: calc(var(--uarr1-width)/9);
    height: calc(var(--uarr1-width)/9);
    margin-top: calc(var(--uarr1-width)/-32); 
  }
  .container :global(input[type="range"]::-moz-range-thumb) {
    background-color: grey; 
    border-style: solid;
    border-color: black;
    border-width: calc(var(--uarr1-width)/100);
    border-radius: calc(var(--uarr1-width)/10);
    width: calc(var(--uarr1-width)/9);
    height: calc(var(--uarr1-width)/9);
    margin-top: calc(var(--uarr1-width)/-32); 
  }

}
@media screen and (orientation: landscape) {
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    left: 25%;
    top: 20%;
    height: 60%;
    border-radius: calc(var(--uarr2-width)/100);
  }
  p {
    font-size: calc(var(--uarr2-width)/60);
  }
  .container :global(.audio-bkg-volume-slider) {
    top: 55%;
    left: -1%;
    width: calc(var(--uarr2-width)/5);
    height: calc(var(--uarr2-width)/25);
  }
  .container :global(input[type="range"]::-webkit-slider-runnable-track) {
    background-color: transparent;
    border-style: solid;
    border-color: black;
    border-width: calc(var(--uarr2-width)/200);
    height: calc(var(--uarr2-width)/40);
    width: calc(var(--uarr2-width)/100);
    border-radius: calc(var(--uarr2-width)/10);
  }
  .container :global(input[type="range"]::-moz-range-track) { 
    background-color: transparent;
    border-style: solid;
    border-color: black;
    border-width: calc(var(--uarr2-width)/200);
    height: calc(var(--uarr2-width)/70);
    width: calc(var(--uarr2-width)/6);
    border-radius: calc(var(--uarr2-width)/10);
  }
  .container :global(input[type="range"]::-webkit-slider-thumb) {
    background-color: grey; 
    border-style: solid;
    border-color: black;
    border-width: calc(var(--uarr2-width)/200);
    border-radius: calc(var(--uarr2-width)/10);
    width: calc(var(--uarr2-width)/30);
    height: calc(var(--uarr2-width)/30);
    margin-top: calc(var(--uarr2-width)/-110); 
  }
  .container :global(input[type="range"]::-moz-range-thumb) {
    background-color: grey; 
    border-style: solid;
    border-color: black;
    border-width: calc(var(--uarr2-width)/200);
    border-radius: calc(var(--uarr2-width)/10);
    width: calc(var(--uarr2-width)/35);
    height: calc(var(--uarr2-width)/35);
    margin-top: calc(var(--uarr2-width)/-32); 
  }
}
</style>