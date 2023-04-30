<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import shift from "../../../scripts/transitions/shift";
  import { siteMenuModal } from "../../../scripts/modalsStore";
  import SiteMenuModalButton from "../../7-elements/interface/modals/SiteMenuModalButton.svelte";
  import SiteMenuBreadcrumbs from "../../6-structures/SiteMenuBreadcrumbs.svelte";
  import SiteMenuTabs from "../../6-structures/tabs/SiteMenuTabs.svelte";
  import SiteHeader from "../../6-structures/content/SiteHeader.svelte";

</script>

<!-- MARKUP /////////////////////////////////////// -->
<SiteMenuModalButton />

{#if $siteMenuModal}
<div id="this" transition:shift="{{y:window.innerHeight,duration:1000}}">

  <SiteHeader />

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
#this :global(header) {
  background-color: black;
  color: white;
}
</style>