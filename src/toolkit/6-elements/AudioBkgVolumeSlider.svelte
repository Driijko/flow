<!-- SCRIPTS //////////////////////////////////////////////// -->
<script>
  import audioBkgStore from "../1-site/audio/bkg/audioBkgStore";
</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<input type="range" min="0.0" max="1.0" step="0.01" 
bind:value={$audioBkgStore.volume} />

<!-- STYLES //////////////////////////////////////////// -->
<style>
input[type="range"] {
  width: 200px;
  height: 50px;
  padding: 10px;
  border: 4px solid red;
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
  background-color: red; 
  border-style: solid;
  border-color: blue;
  border-width: 5px;
  border-radius: 50px;
  width: 15%;
  height: 300%;
  margin-top: -4.8%; 
}
input[type="range"]::-moz-range-thumb {
  background-color: red; 
  border-style: solid;
  border-color: blue;
  border-width: 5px;
  border-radius: 50px;
  width: 15%;
  height: 40%;
  margin-top: -4.8%; 
}
</style>