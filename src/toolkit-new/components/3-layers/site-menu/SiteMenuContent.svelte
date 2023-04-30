<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import shift from "../../../scripts/transitions/shift";
  import { siteMenuModal } from "../../../scripts/modalsStore";
  import SiteMenuModalButton from "../../7-elements/interface/modals/SiteMenuModalButton.svelte";
  import SiteMenuBreadcrumbs from "../../6-structures/SiteMenuBreadcrumbs.svelte";
  import SiteMenuTabs from "../../6-structures/tabs/SiteMenuTabs.svelte";

</script>

<!-- MARKUP /////////////////////////////////////// -->
<SiteMenuModalButton />

{#if $siteMenuModal}
<div transition:shift="{{y:window.innerHeight,duration:1000}}">
  <header>
    <h1>FLOW</h1>
    <h2>A front-end web development framework</h2>
  </header>

  <SiteMenuBreadcrumbs />

  <SiteMenuTabs />
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