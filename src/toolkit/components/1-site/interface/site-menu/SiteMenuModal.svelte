<!-- SCRIPTS /////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------
  import { siteMenuModal } from "../../../../data/dynamic/modalsStore";
  import shift from "../../../../scripts/transitions/shift";
  
</script>

<!-- MARKUP /////////////////////////////////// -->
{#if $siteMenuModal}
  <dialog class="site-menu-modal" open
    transition:shift="{{y:window.innerHeight,duration:1000}}"
  >
    <slot />
  </dialog>
{/if}

<!-- STYLES ///////////////////////////////////// -->
<style>
.site-menu-modal {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>