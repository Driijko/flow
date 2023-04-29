<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------
  // import siteMenuStore from "../../scripts/siteMenuStore";
  import { siteMenuTab, getSiteMenuData } from "../../scripts/siteMenuStore";

  // REACTIVE ------------------------------
  $: tabCurrentLevel = getSiteMenuData($siteMenuTab.current, "currentLevel");
  $: tabLevels = getSiteMenuData($siteMenuTab.current, "levels");

</script>

<!-- MARKUP ///////////////////////////////////////// -->
<ul class="site-menu-breadcrumbs horizontal-free-scroll">
  <li class:current={$tabCurrentLevel === 0}>
    <a href="#{$siteMenuTab.current}0">
      {$siteMenuTab.current}/
    </a>
  </li>
  {#each $tabLevels as level, index}
    <li class:current={$tabCurrentLevel === index + 1}>
      <a href="#{$siteMenuTab.current}{index + 1}">
        {level}/
      </a>
    </li>
  {/each}
</ul>


<!-- STYLE ////////////////////////////////////////// -->
<style>
  ul {
    background-color: black;
  }
  li {
    color: hsl(0, 0%, 70%);
  }
  li.current {
    color: white;
  }
</style>