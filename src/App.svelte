<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import { currentPage, newPage, setPageExit } from "./toolkit-new/scripts/currentPageStore";
  import AudioVolumeModalButton from "./toolkit-new/components/7-elements/interface/modals/AudioVolumeModalButton.svelte";
  import AudioBkgVolumeSlider from "./toolkit-new/components/7-elements/interface/audio-bkg/AudioBkgVolumeSlider.svelte";

  setUp();
</script>

<AudioBkg />
<AudioVolumeModalButton />
<br/>
<AudioBkgVolumeSlider />
<br/>
<br/>
<br/>
<br/>
<p>
  {$currentPage}
</p>
<!-- <p>
  {$audioVolumeModal}
</p> -->

<button type="button" on:click={()=> setPageExit(()=> console.log("hi"))}>
  Set Page Exit
</button><br/>
<button type="button" on:click={()=> newPage("opening-prompt")}>
  Opening Prompt
</button>







<!-- STYLES //////////////////////////////// -->
<style>
:global(input[type="checkbox"]) {
  border: 4px solid black;
}
</style>