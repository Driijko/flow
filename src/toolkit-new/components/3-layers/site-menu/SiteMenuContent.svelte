<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import { fly } from "svelte/transition";
  import modalsStore from "../../../scripts/modalsStore";
  import SiteMenuModalButton from "../../7-elements/interface/modals/SiteMenuModalButton.svelte";
  import SiteMenuModalTabs from "../../6-structures/tabs/SiteMenuModalTabs.svelte";

  // STATE --------------------------------------------
  let currentTab = 1;

  // EVENT HANDLERS -------------------------------------
  function updateCurrentTab(tab) {
    currentTab = tab;
  }

</script>

<!-- MARKUP /////////////////////////////////////// -->
<SiteMenuModalButton />

{#if $modalsStore.siteMenu}
<div transition:fly="{{y:400,duration:1000}}">
  <header>
    <h1>FLOW</h1>
    <h2>A front-end web development framework</h2>
  </header>

  <SiteMenuModalTabs {currentTab} {updateCurrentTab} />
</div>
{/if}

<!-- STYLES /////////////////////////////////// -->
<style>
div {
  width: 100%;
  height: 100%;
}
header {
  background-color: black;
  color: white;
}
</style>