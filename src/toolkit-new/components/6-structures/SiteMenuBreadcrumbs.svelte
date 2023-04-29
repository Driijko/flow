<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------
  import siteMenuStore from "../../scripts/siteMenuStore";

</script>

<!-- MARKUP ///////////////////////////////////////// -->
<ul class="site-menu-breadcrumbs horizontal-free-scroll">
  <li class:current={$siteMenuStore.navigation.current === 0}>
    <a href="#{$siteMenuStore.tab.current}0">
      {$siteMenuStore.tab.current}/
    </a>
  </li>
  {#each $siteMenuStore[$siteMenuStore.tab.current].open as level,index}
    <li class:current={$siteMenuStore.navigation.current === index + 1}>
      <a href="#{$siteMenuStore.tab.current}{index + 1}" >{level}/ 
      </a>
    </li>
  {/each}
</ul>

<!-- STYLE ////////////////////////////////////////// -->
<style>
  li {
    color: hsl(0, 0%, 70%);
  }
  li.current {
    color: white;
  }
</style>