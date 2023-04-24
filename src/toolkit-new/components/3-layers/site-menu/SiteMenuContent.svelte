<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import modalsStore from "../../../scripts/modalsStore";
  import SiteMenuModalButton from "../../7-elements/interface/modals/SiteMenuModalButton.svelte";
  import SiteMenuModalTabs from "../../6-structures/tabs/SiteMenuModalTabs.svelte";

  // STATE --------------------------------------------
  let currentTab = 0;

  // EVENT HANDLERS -------------------------------------
  function updateCurrentTab(tab) {
    currentTab = tab;
  }

</script>

<!-- MARKUP /////////////////////////////////////// -->
<SiteMenuModalButton />

{#if $modalsStore.siteMenu}

  <h1>FLOW</h1>
  <h2>A front-end web development framework</h2>

  <SiteMenuModalTabs {currentTab} {updateCurrentTab} />
{/if}