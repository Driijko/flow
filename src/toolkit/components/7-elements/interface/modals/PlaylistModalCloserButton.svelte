<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  import XIcon from "../../icons/menu/XIcon.svelte";
  import { modals } from "../../../../scripts/modalsStore";
</script>

<!-- MARKUP ////////////////////////////////////////// -->
<button type="button" class="playlist-modal-closer-button"
  on:click={()=> modals.close("playlist")}
>
  <XIcon />
</button>

<!-- STYLES //////////////////////////////////// -->
<style>
button {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>