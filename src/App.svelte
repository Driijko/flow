<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import AudioBkgCheckbox from "./toolkit-new/components/7-elements/interface/audio-bkg/AudioBkgCheckbox.svelte";

  setUp();
</script>

<AudioBkg />
<AudioBkgCheckbox />






<!-- STYLES //////////////////////////////// -->
<style>
:global(input[type="checkbox"]) {
  border: 4px solid black;
}
</style>