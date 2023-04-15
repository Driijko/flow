<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------------
  import AudioBkg from "./toolkit/site/audio/bkg/AudioBkg.svelte";
  import audioBkgStore from "./toolkit/site/audio/bkg/audioBkgStore";

</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<AudioBkg />

<button type="button" on:click={()=> audioBkgStore.play()} >PLAY</button>
<button type="button" on:click={()=> audioBkgStore.pause()} >PAUSE</button>
<button type="button" on:click={()=> audioBkgStore.togglePaused()} >TOGGLE</button>