<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------------
  import AudioBkg from "./toolkit/site/audio/bkg/AudioBkg.svelte";
  import audioBkgStore from "./toolkit/site/audio/bkg/audioBkgStore";
</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<AudioBkg />

<button type="button" on:click={()=> audioBkgStore.load("./assets/audio/bkg/opening-prompt.mp3")} >TEST</button>