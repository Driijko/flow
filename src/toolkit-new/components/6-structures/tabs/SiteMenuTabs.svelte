<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------
  import TabTransition from "./TabTransition.svelte";
  import CompassIcon from "../../7-elements/icons/menu/CompassIcon.svelte";
  import GearIcon from "../../7-elements/icons/menu/GearIcon.svelte";
  import SiteSettings from "../SiteSettings.svelte";
  import BranchingNav from "../../5-containers/BranchingNav.svelte";
  import SiteMenuBreadcrumbs from "../SiteMenuBreadcrumbs.svelte";
  import siteMenuStore from "../../../scripts/siteMenuStore";
</script>

<!-- MARKUP /////////////////////////////////// -->
<SiteMenuBreadcrumbs />

{#if $siteMenuStore.tab.current === "navigation"}
  <TabTransition>
    <BranchingNav />
  </TabTransition>
{:else if $siteMenuStore.tab.current === "settings"}
  <TabTransition>
    <SiteSettings />
  </TabTransition>
{/if}

<ul class="site-menu-modal-tab-buttons">
  <li>
    <button class:selected={$siteMenuStore.tab.current === "navigation"} 
      on:click={()=> siteMenuStore.tab("navigation")}
    >
      <CompassIcon />
    </button>
  </li>
  <li>
    <button class:selected={$siteMenuStore.tab.current === "settings"} 
      on:click={()=> siteMenuStore.tab("settings")}
    >
      <GearIcon />
    </button>
  </li>
</ul>

<!-- STYLES /////////////////////////////////// -->
<style>
.site-menu-modal-tab-buttons {
  background-color: white;
}
button {
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  border-radius: 0% 0% 50% 50%;
}
button.selected {
  background-color: black;
}
button.selected :global(svg path) {
  fill: white;
}
button :global(svg) {
  height: 100%;
}
button :global(svg path) {
  fill: hsl(0, 0%, 15%);
}
@media (hover:hover) {
  button:not(.selected):hover {
    transition-property: transform;
    transition-duration: 1s;
    transition-timing-function: ease-out;
  }
}
</style>