<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------
  import CompassIcon from "../../7-elements/icons/CompassIcon.svelte";
  import GearIcon from "../../7-elements/icons/GearIcon.svelte";
  import SiteSettings from "../SiteSettings.svelte";
  import Nav from "../Nav.svelte";

  // STATE --------------------------------------
  let currentTab = 0;
  let navLevel = "";

  // EVENT HANDLERS --------------------------------
  function updateNavLevel(level) {
    navLevel = level;
  }
</script>

<!-- MARKUP /////////////////////////////////// -->
{#if currentTab === 0}
  <Nav {navLevel} {updateNavLevel}  />
{:else if currentTab === 1}
  <SiteSettings />
{/if}

<ul>
  <li>
    <input type="radio" name="tab" id="navigation" 
      checked={currentTab === 0} on:click={()=> currentTab = 0} 
    />
    <label for="navigation">
      <CompassIcon />
    </label>
  </li>
  <li>
    <input type="radio" name="tab" id="settings" 
      checked={currentTab === 1} on:click={()=> currentTab = 1} 
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
    height: 40px;
    width: 40px;
    display: block;
  }
  input:checked + label {
    background-color: grey;
  }
</style>