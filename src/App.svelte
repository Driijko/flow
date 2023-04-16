<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------------
  import audioBkgStore from "./toolkit/site/audio/bkg/audioBkgStore";
  import AudioBkg from "./toolkit/site/audio/bkg/AudioBkg.svelte";
  import AudioBkgPausePlayButton from "./toolkit/elements/AudioBkgPausePlayButton.svelte";
  import AudioBkgVolumeSlider from "./toolkit/elements/AudioBkgVolumeSlider.svelte";

</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<AudioBkg />
<AudioBkgPausePlayButton />
<AudioBkgVolumeSlider />
<button type="button" on:click={()=> audioBkgStore.crossFade({path: "./assets/audio/bkg/test-music.mp3",name:"Iroh 0"},3)}>Load</button>
<p>
  {$audioBkgStore.track.name}
</p>