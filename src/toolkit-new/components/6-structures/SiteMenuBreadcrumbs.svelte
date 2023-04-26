<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // PROPS -------------------------------
  export let breadcrumbs = [];

</script>

<!-- MARKUP ///////////////////////////////////////// -->
<ul class="site-menu-breadcrumbs">
  {#each breadcrumbs as crumb}
    <li>
      <a href="{crumb.href}" >{crumb.text} /</a>
    </li>
  {/each}
</ul>
