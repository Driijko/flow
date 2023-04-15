<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------------
  import AudioBkg from "./toolkit/site/audio/bkg/AudioBkg.svelte";
  import audioBkgStore from "./toolkit/site/audio/bkg/audioBkgStore";

</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<AudioBkg />

<button type="button" on:click={()=> {
  audioBkgStore.play()
}} >Play</button>
<button type="button" on:click={()=> audioBkgStore.load("./assets/audio/bkg/opening-prompt.mp3")} >Load</button>
<button type="button" on:click={()=> audioBkgStore.crossFade("./assets/audio/bkg/test-music.mp3", 3)}>Crossfade</button>

<p>
  Crossfade registered: {$audioBkgStore.crossFade.registered}
</p>
<p>
  Crossfade track path: {$audioBkgStore.crossFade.trackPath}
</p>
<p>
  Crossfade duration: {$audioBkgStore.crossFade.duration}
</p>
<p>
  track path: {$audioBkgStore.trackPath}
</p>
<p>
  volume: {$audioBkgStore.volume}
</p>
<p>
  paused: {$audioBkgStore.paused}
</p>

