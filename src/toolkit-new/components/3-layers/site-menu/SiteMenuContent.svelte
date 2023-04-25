<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import shift from "../../../scripts/transitions/shift";
  import modalsStore from "../../../scripts/modalsStore";
  import SiteMenuModalButton from "../../7-elements/interface/modals/SiteMenuModalButton.svelte";
  import SiteMenuModalTabs from "../../6-structures/tabs/SiteMenuModalTabs.svelte";

  // STATE --------------------------------------------
  // let currentTab = 0;
  let menuTabs = {
    current: 1,
    prev: 0,
    update: tab => {
      menuTabs.prev = menuTabs.current;
      menuTabs.current = tab;
    },
  }

  // EVENT HANDLERS -------------------------------------
  // function updateCurrentTab(tab) {
  //   currentTab = tab;
  // }

</script>

<!-- MARKUP /////////////////////////////////////// -->
<SiteMenuModalButton />

{#if $modalsStore.siteMenu}
<div transition:shift="{{y:500,duration:1000}}">
  <header>
    <h1>FLOW</h1>
    <h2>A front-end web development framework</h2>
  </header>

  <SiteMenuModalTabs {menuTabs} />
  <!-- <SiteMenuModalTabs {currentTab} {updateCurrentTab} /> -->
</div>
{/if}

<!-- STYLES /////////////////////////////////// -->
<style>
div {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
header {
  background-color: black;
  color: white;
}
</style>