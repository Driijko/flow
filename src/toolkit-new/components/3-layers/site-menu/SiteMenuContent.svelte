<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import modalsStore from "../../../scripts/modalsStore";
  import SiteMenuModalButton from "../../7-elements/interface/modals/SiteMenuModalButton.svelte";

</script>

<!-- MARKUP /////////////////////////////////////// -->
<SiteMenuModalButton />

{#if $modalsStore.siteMenu}
  <p>open</p>
{/if}