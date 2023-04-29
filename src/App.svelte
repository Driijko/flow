<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import AudioBkgVolumeSlider from "./toolkit-new/components/7-elements/interface/audio-bkg/AudioBkgVolumeSlider.svelte";
  import { audioBkgPaused } from "./toolkit-new/scripts/audioBkgStore";

  setUp();
</script>

<AudioBkg />
<AudioBkgVolumeSlider />
<p>
  {$audioBkgPaused}
</p>





<!-- STYLES //////////////////////////////// -->
<style>
:global(input[type="checkbox"]) {
  border: 4px solid black;
}
</style>