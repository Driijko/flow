<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------------
  import { modals } from "../../../../data/dynamic/modalsStore";
  import XIcon from "../../icons/interface/XIcon.svelte";

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" class="site-menu-modal-closer-button" 
  on:click={()=>modals.close("siteMenu")}
>
  <XIcon />
</button>