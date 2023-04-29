<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import { siteMenuTab, newTab, navigationLevels, navigationExpand,
    navigationCollapse
  } from "./toolkit-new/scripts/siteMenuStore";

  setUp();
</script>

<AudioBkg />
<br/>
<br/>
<br/>
<br/>
<br/>
{#each $navigationLevels as level}
  <p>
    {level}
  </p>
{/each}

<button type="button" on:click={()=> navigationExpand("music")}>
  Music
</button><br/>
<button type="button" on:click={()=> navigationExpand("blues")}>
  Blues
</button><br/>
<button type="button" on:click={()=> navigationCollapse("blues", 2)}>
  Collapse
</button>







<!-- STYLES //////////////////////////////// -->
<style>
:global(input[type="checkbox"]) {
  border: 4px solid black;
}
</style>