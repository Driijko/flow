<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------
  import TabContent from "./TabContent.svelte";
  import CompassIcon from "../../7-elements/icons/CompassIcon.svelte";
  import GearIcon from "../../7-elements/icons/GearIcon.svelte";
  import SiteSettings from "../SiteSettings.svelte";
  import BranchingNav from "../../5-containers/BranchingNav.svelte";

  // PROPS --------------------------------------
  export let menuTabs;

  // STATE --------------------------------------
  let navLevel = "";

  // EVENT HANDLERS --------------------------------
  function updateNavLevel(level) {
    navLevel = level;
  }

</script>

<!-- MARKUP /////////////////////////////////// -->
{#if menuTabs.current === 0}
  <TabContent {menuTabs}>
    <BranchingNav />
  </TabContent>
{:else if menuTabs.current === 1}
  <TabContent {menuTabs}>
    <SiteSettings />
  </TabContent>
{/if}

<ul class="site-menu-modal-tab-buttons">
  <li>
    <button class:selected={menuTabs.current === 0} on:click={()=> menuTabs.update(0)}>
      <CompassIcon />
    </button>
  </li>
  <li>
    <button class:selected={menuTabs.current === 1} on:click={()=> menuTabs.update(1)}>
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