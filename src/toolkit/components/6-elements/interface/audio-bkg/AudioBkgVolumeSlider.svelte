<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------
  import { audioBkgAdjustVolume, audioBkgVolume } 
  from "../../../../scripts/audioBkgStore";

  // PROPS ----------------------------------
  export let axis = "horizontal";

  // EVENT HANDLERS ------------------------
  function handleInput(e) {audioBkgAdjustVolume(e.target.value);};

</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<input type="range" class:vertical={axis === "vertical"} class="audio-bkg-volume-slider"
  min="0.00" max="1.00" step="0.01" 
  value="{$audioBkgVolume}" on:input={handleInput} 
/>

<!-- STYLES //////////////////////////////////////////// -->
<style>
input[type="range"] {
  width: 200px;
  height: 50px;
  padding: 10px;
}
input.vertical {
  transform-origin: 50% 50%;
  transform: rotate(270deg);
}
input[type="range"]::-webkit-slider-runnable-track {
  background-color: transparent;
  border-style: solid;
  border-color: black;
  border-width: 5px;
  height: 80%;
  border-radius: 50px;
}
input[type="range"]::-moz-range-track { 
  background-color: transparent;
  border-style:solid;
  border-color: black;
  border-width: 5px;
  height: 80%;
  border-radius: 50px;
}
input[type="range"]::-webkit-slider-thumb {
  background-color: grey; 
  border-style: solid;
  border-color: black;
  border-width: 5px;
  border-radius: 50px;
  width: 15%;
  height: 200%;
  margin-top: -4.8%; 
}
input[type="range"]::-moz-range-thumb {
  background-color: grey;
  border-style: solid;
  border-color: black;
  border-width: 5px;
  border-radius: 50px;
  width: 15%;
  height: 40%;
  margin-top: -4.8%; 
}
</style>