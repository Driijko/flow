<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  import UpAngle from "../../icons/arrows/UpAngle.svelte";
  import { modals } from "../../../../scripts/modalsStore";
</script>

<!-- MARKUP ////////////////////////////////////////// -->
<button type="button" class="playlist-modal-closer-button"
  on:click={()=> modals.close("playlist")}
>
  <UpAngle />
</button>

<!-- STYLES //////////////////////////////////// -->
<style>
button {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>