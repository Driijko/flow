<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  import XIcon from "../../icons/menu/XIcon.svelte";
  import { modals } from "../../../../scripts/modalsStore";
</script>

<!-- MARKUP ////////////////////////////////////////// -->
<button type="button" on:click={()=> modals.close("playlist")}>
  <XIcon />
</button>
