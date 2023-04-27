<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------
  import TabTransition from "./TabTransition.svelte";
  import CompassIcon from "../../7-elements/icons/CompassIcon.svelte";
  import GearIcon from "../../7-elements/icons/GearIcon.svelte";
  import SiteSettings from "../SiteSettings.svelte";
  import BranchingNav from "../../5-containers/BranchingNav.svelte";
  import SiteMenuBreadcrumbs from "../SiteMenuBreadcrumbs.svelte";

  // PROPS --------------------------------------
  export let menuTabs;

  // STATE -----------------------------------
  let breadcrumbs = [];

  function updateBreadcrumbs(array) { 
    if (menuTabs.current === 0) {
      breadcrumbs = [{text: "navigation", href: "#nav0"}];
    } else if (menuTabs.current === 1) {
      breadcrumbs = [{text: "settings", href: "settings"}];
    };
    if (array) {
      array.forEach((value,index)=> {
        breadcrumbs[index + 1] = value;
      });       
    }
  }

  updateBreadcrumbs();

  // EVENT HANDLERS ----------------------------
  function handleClick(tab) {
    menuTabs.update(tab);
    updateBreadcrumbs();
  }

</script>

<!-- MARKUP /////////////////////////////////// -->
<SiteMenuBreadcrumbs {breadcrumbs} />

{#if menuTabs.current === 0}
  <TabTransition {menuTabs}>
    <BranchingNav {updateBreadcrumbs} />
  </TabTransition>
{:else if menuTabs.current === 1}
  <TabTransition {menuTabs}>
    <SiteSettings />
  </TabTransition>
{/if}

<ul class="site-menu-modal-tab-buttons">
  <li>
    <button class:selected={menuTabs.current === 0} 
      on:click={()=> handleClick(0)}>
      <CompassIcon />
    </button>
  </li>
  <li>
    <button class:selected={menuTabs.current === 1} 
      on:click={()=> handleClick(1)}>
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