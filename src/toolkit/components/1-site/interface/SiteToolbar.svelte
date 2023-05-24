<!-- SCRIPTS /////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------
  import { layoutBreakpoint } from "../../../data/dynamic/layoutBreakpointStore";
  import SiteMenuModalOpenerButton 
  from "../../6-elements/interface/modal/SiteMenuModalOpenerButton.svelte";
</script>

<!-- MARKUP /////////////////////////////////////// -->
{#if $layoutBreakpoint !== "large-desktop"}
  <div class="site-toolbar" class:mobile={$layoutBreakpoint === "mobile"}
    class:desktop={$layoutBreakpoint === "small-desktop"}
  >
    <SiteMenuModalOpenerButton />
  </div>
{/if}

<!-- STYLES ///////////////////////////////////// -->
<style>
.site-toolbar {
  position: absolute;
  display: flex;
  pointer-events: initial;
}
.site-toolbar :global(line) {
  stroke: white;
}
/* MOBILE ----------------------------- */
.site-toolbar.mobile {
  background-color: black;
  width: 100%;
  height: 8%;
  top: 92%;
  justify-content: center;
  align-items: center;
}
.site-toolbar.mobile :global(.site-menu-modal-opener-button) {
  width: 15%;
  height: 60%;
}
/* DESKTOP --------------------------- */
.site-toolbar.desktop {
  top: 0%;
  right: 0%;
}
.site-toolbar.desktop :global(.site-menu-modal-opener-button) {
  background-color: black;
  width: calc(var(--iw) * 0.05);
  height: calc(var(--iw) * 0.05);
  padding: calc(var(--iw) * 0.012);
}
</style>