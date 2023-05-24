<!-- SCRIPTS /////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------
  import { siteMenuModal } from "../../../../data/dynamic/modalsStore";
  import shift from "../../../../scripts/transitions/shift";
  
</script>

<!-- MARKUP /////////////////////////////////// -->
{#if $siteMenuModal}
  <div class="site-menu-modal" 
    transition:shift="{{y:window.innerHeight,duration:1000}}"
  >
    <slot />
  </div>
{/if}

<!-- STYLES ///////////////////////////////////// -->
<style>
.site-menu-modal {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: pink;
}
</style>