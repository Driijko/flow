<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import { currentPage, newPage, setPageExit } from "./toolkit-new/scripts/currentPageStore";

  setUp();
</script>

<AudioBkg />
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