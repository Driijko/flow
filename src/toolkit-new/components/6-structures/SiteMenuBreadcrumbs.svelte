<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------
  import siteMenuStore from "../../scripts/siteMenuStore";
  // PROPS -------------------------------
  // export let breadcrumbs = [];

</script>

<!-- MARKUP ///////////////////////////////////////// -->
<ul class="site-menu-breadcrumbs hor-free-scroll">
  <li>
    <a href="#{$siteMenuStore.tab}0">
      {$siteMenuStore.tab}/
    </a>
  </li>
  {#each $siteMenuStore[$siteMenuStore.tab].open as level,index}
    <li>
      <a href="#{$siteMenuStore.tab}{index + 1}" >{level}/ 
      </a>
    </li>
  {/each}
</ul>