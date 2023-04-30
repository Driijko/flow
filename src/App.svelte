<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import { siteMenuTab, newTab, navigationLevels, navigationExpand,
    navigationCollapse, getSiteMenuData, setCurrentNavigationLevel
  } from "./toolkit-new/scripts/siteMenuStore";
  import SiteMenuBreadcrumbs from "./toolkit-new/components/6-structures/SiteMenuBreadcrumbs.svelte";
  import BranchingNav from "./toolkit-new/components/5-containers/BranchingNav.svelte";
  import SiteMenuContent from "./toolkit-new/components/3-layers/site-menu/SiteMenuContent.svelte";
  import SiteSettings from "./toolkit-new/components/6-structures/SiteSettings.svelte";
  import LoadingPage from "./toolkit-new/components/2-pages/LoadingPage.svelte";
  import OpeningPromptPage from "./toolkit-new/components/2-pages/opening-prompt/OpeningPromptPage.svelte";
  import OpeningPromptContent from "./toolkit-new/components/2-pages/opening-prompt/OpeningPromptContent.svelte";
  import { audioBkgVolume } from "./toolkit-new/scripts/audioBkgStore";

  setUp();
</script>

<AudioBkg />
<!-- <SiteSettings /> -->
<!-- <SiteMenuContent /> -->
<OpeningPromptContent />
<p>
  {$audioBkgVolume}
</p>
<!-- <br/>
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
</button><br/>
<button type="button" on:click={()=> newTab("settings")}>
  Settings
</button><br/>
<button type="button" on:click={()=> newTab("navigation")}>
  Navigation
</button><br/>
<button type="button" on:click={()=> setCurrentNavigationLevel(1)}>
  Nav 1
</button><br/>
<button type="button" on:click={()=> setCurrentNavigationLevel(2)}>
  Nav 2
</button><br/> -->




<!-- STYLES //////////////////////////////// -->
<style>
p {
  position: absolute;
  top: 70%;
}
:global(input[type="checkbox"]) {
  border: 4px solid black;
}
:global(.opening-prompt-content) {
  top: 10%;
}
</style>