<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import shift from "../../../scripts/transitions/shift";
  import { siteMenuModal } from "../../../scripts/modalsStore";
  import SiteMenuBreadcrumbs from "../../5-structures/SiteMenuBreadcrumbs.svelte";
  import SiteMenuTabs from "../../5-structures/tabs/SiteMenuTabs.svelte";
  import InterfaceTray from "../../4-layouts/partial/InterfaceTray.svelte";

</script>

<!-- MARKUP /////////////////////////////////////// -->
<!-- <SiteMenuModalButton /> -->
<div id="this">
  <InterfaceTray />

  {#if $siteMenuModal}
  <div transition:shift="{{y:window.innerHeight,duration:1000}}">
  
    <header>
      <h1>FLOW</h1>
      <h2>A front-end web-development framework</h2>
    </header>
  
    <SiteMenuBreadcrumbs />
  
    <SiteMenuTabs />
  </div>
  {/if}
</div>


<!-- STYLES /////////////////////////////////// -->
<style>
div {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#this :global(.interface-tray) {
  position: absolute;
  z-index: 2;
  pointer-events: initial;
}
header {
  background-color: black;
  color: white;
}
</style>