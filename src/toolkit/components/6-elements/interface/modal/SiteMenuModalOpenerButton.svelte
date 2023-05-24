<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------------
  import { modals } from "../../../../data/dynamic/modalsStore";
  import MenuIcon from "../../icons/interface/MenuIcon.svelte";

</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" class="site-menu-modal-opener-button" 
  on:click={()=>modals.open("siteMenu")}
>
  <MenuIcon />
</button>