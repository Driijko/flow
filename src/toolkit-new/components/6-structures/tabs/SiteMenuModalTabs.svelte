<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------
  import TabContent from "./TabContent.svelte";
  import CompassIcon from "../../7-elements/icons/CompassIcon.svelte";
  import GearIcon from "../../7-elements/icons/GearIcon.svelte";
  import SiteSettings from "../SiteSettings.svelte";
  import Nav from "../Nav.svelte";
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
    <!-- <Nav {navLevel} {updateNavLevel} /> -->
    <BranchingNav />
  </TabContent>
{:else if menuTabs.current === 1}
  <TabContent {menuTabs}>
    <SiteSettings />
  </TabContent>
{/if}

<ul class="site-menu-modal-tab-buttons">
  <li>
    <input type="radio" name="tab" id="navigation" 
      checked={menuTabs.current === 0} on:click={()=> menuTabs.update(0)} 
    />
    <label for="navigation">
      <CompassIcon />
    </label>
  </li>
  <li>
    <input type="radio" name="tab" id="settings" 
      checked={menuTabs.current === 1} on:click={()=> menuTabs.update(1)} 
    />
    <label for="settings">
      <GearIcon />
    </label>
  </li>
</ul>

<!-- STYLES /////////////////////////////////// -->
<style>
.site-menu-modal-tab-buttons {
  background-color: white;
}
input {
  display: none;
}
label {
  display: block;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
  border-radius: 0% 0% 50% 50%;
}
input:checked + label {
  background-color: black;
}
input:checked + label :global(svg path) {
  fill: white;
}
label :global(svg) {
  height: 100%;
}
label :global(svg path) {
  fill: hsl(0, 0%, 15%);
}
@media (hover:hover) {
  input:not(:checked) + label {
    transition-property: transform;
    transition-duration: 1s;
    transition-timing-function: ease-out;
  }
}
</style>