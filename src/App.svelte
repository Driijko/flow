<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import { siteMenuModal, audioVolumeModal, modals } from "./toolkit-new/scripts/modalsStore";

  setUp();
</script>

<AudioBkg />
<p>
  {$siteMenuModal}
</p>
<p>
  {$audioVolumeModal}
</p>

<button type="button" on:click={()=> modals.close("audioVolume")}
>siteMenu</button>





<!-- STYLES //////////////////////////////// -->
<style>
:global(input[type="checkbox"]) {
  border: 4px solid black;
}
</style>