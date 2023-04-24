<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------
  import { fly } from "svelte/transition";
  import TabContent from "./TabContent.svelte";
  import CompassIcon from "../../7-elements/icons/CompassIcon.svelte";
  import GearIcon from "../../7-elements/icons/GearIcon.svelte";
  import SiteSettings from "../SiteSettings.svelte";
  import Nav from "../Nav.svelte";

  // PROPS --------------------------------------
  export let currentTab = 0;
  export let updateCurrentTab;

  // STATE --------------------------------------
  let navLevel = "";

  // EVENT HANDLERS --------------------------------
  function updateNavLevel(level) {
    navLevel = level;
  }
</script>

<!-- MARKUP /////////////////////////////////// -->
{#if currentTab === 0}
  <TabContent>
    <Nav {navLevel} {updateNavLevel} />
  </TabContent>
{:else if currentTab === 1}
  <TabContent>
    <SiteSettings />
  </TabContent>
{/if}

<ul class="site-menu-modal-tab-buttons">
  <li>
    <input type="radio" name="tab" id="navigation" 
      checked={currentTab === 0} on:click={()=> updateCurrentTab(0)} 
    />
    <label for="navigation">
      <CompassIcon />
    </label>
  </li>
  <li>
    <input type="radio" name="tab" id="settings" 
      checked={currentTab === 1} on:click={()=> updateCurrentTab(1)} 
    />
    <label for="settings">
      <GearIcon />
    </label>
  </li>
</ul>

<!-- STYLES /////////////////////////////////// -->
<style>
input {
  display: none;
}
label {
  display: block;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(0, 0%, 15%);
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
  fill: grey;
}
</style>