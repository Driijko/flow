<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import { audioBkgTrack, audioBkgLoad, audioBkgPlay, audioBkgPause,
    audioBkgPaused, audioBkgFade, audioBkgVolume, audioBkgCurrentTime,
    audioBkgRestart, audioBkgAdjustVolume, audioBkgTotalTime, 
    audioBkgLoadPlay, audioBkgFadeLoadPlay, audioBkgTogglePausePlay,
    audioBkgSetLoop
  } from "./toolkit-new/scripts/audioBkgStore";

  setUp();
</script>

<AudioBkg />
<p>
  {$audioBkgTrack.name}
</p>
<p>
  {$audioBkgTrack.path}
</p>
<p>
  {$audioBkgPaused}
</p>
<p>
  {$audioBkgVolume}
</p>
<p>
  {$audioBkgCurrentTime}
</p>
<p>
  {$audioBkgTotalTime}
</p>


<button type="button" on:click={()=> audioBkgLoad(
  "Opening Prompt Loop", "./assets/audio/bkg/opening-prompt.mp3"
)}
>load</button>

<button type="button" on:click={()=> audioBkgLoad(
  "Test Music", "./assets/audio/bkg/test-music.mp3"
)}
>load 2</button>

<button type="button" on:click={()=> audioBkgLoadPlay(
  "Test Music", "./assets/audio/bkg/test-music.mp3"
)}
>load and play</button>

<button type="button" on:click={()=> audioBkgPlay()}
>play</button>

<button type="button" on:click={()=> audioBkgPause()}
  >pause</button>

<button type="button" on:click={()=> audioBkgFade(5000)}
>fade</button>

<button type="button" on:click={()=> audioBkgRestart()}
>restart</button>

<button type="button" on:click={()=> audioBkgAdjustVolume(0.3)}
>volume: 0.3</button>
<br/>

<button type="button" on:click={()=> audioBkgTogglePausePlay()}
>play/pause</button>
<br/>

<button type="button" on:click={()=> audioBkgSetLoop(true)}
>loop</button>
<br/>

<button type="button" on:click={()=> audioBkgFadeLoadPlay(
  "Opening Prompt Theme", "./assets/audio/bkg/opening-prompt.mp3", 3000)}
>fade, load, play</button>






<!-- STYLES //////////////////////////////// -->
<style>

</style>