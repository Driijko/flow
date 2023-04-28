<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------
  import siteMenuStore from "../../scripts/siteMenuStore";
  // PROPS -------------------------------
  // export let breadcrumbs = [];

</script>

<!-- MARKUP ///////////////////////////////////////// -->
<ul class="site-menu-breadcrumbs">
  <li>
    <a href="#{$siteMenuStore.tab.current}0">
      {$siteMenuStore.tab.current}/
    </a>
  </li>
  {#each $siteMenuStore[$siteMenuStore.tab.current].open as level,index}
    <li>
      <a href="#{$siteMenuStore.tab.current}{index + 1}" >{level}/ 
      </a>
    </li>
  {/each}
</ul>