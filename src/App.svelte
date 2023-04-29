<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import AudioBkgTimer from "./toolkit-new/components/6-structures/audio-bkg/AudioBkgTimer.svelte";
  import { audioBkgPaused } from "./toolkit-new/scripts/audioBkgStore";

  setUp();
</script>

<AudioBkg />
<AudioBkgTimer />
<p>
  {$audioBkgPaused}
</p>





<!-- STYLES //////////////////////////////// -->
<style>
:global(input[type="checkbox"]) {
  border: 4px solid black;
}
</style>