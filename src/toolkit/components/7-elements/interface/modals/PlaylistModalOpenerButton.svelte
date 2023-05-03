<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  import MusicIcon from "../../icons/audio/MusicIcon.svelte";
  import { modals } from "../../../../scripts/modalsStore";
</script>

<!-- MARKUP ////////////////////////////////////////// -->
<button type="button" class="playlist-modal-opener-button"
  on:click={()=> modals.open("playlist")}
>
  <MusicIcon />
</button>

<!-- STYLES //////////////////////////////////// -->
<style>
button {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>