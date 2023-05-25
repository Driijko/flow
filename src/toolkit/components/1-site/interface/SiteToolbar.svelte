<!-- SCRIPTS /////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------
  import { layoutBreakpoint } from "../../../data/dynamic/layoutBreakpointStore";
  import SiteMenuModalOpenerButton 
  from "../../6-elements/interface/modal/SiteMenuModalOpenerButton.svelte";
  import { siteMenuModal } from "../../../data/dynamic/modalsStore";
</script>

<!-- MARKUP /////////////////////////////////////// -->
{#if $layoutBreakpoint !== "large-desktop"}
  <div class="site-toolbar" class:mobile={$layoutBreakpoint === "mobile"}
    class:desktop={$layoutBreakpoint === "small-desktop"}
    inert={$siteMenuModal}
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
.site-toolbar.mobile :global(button) {
  width: 15%;
  height: 60%;
}
/* DESKTOP --------------------------- */
.site-toolbar.desktop {
  top: 0%;
  right: 0%;
}
.site-toolbar.desktop :global(button) {
  background-color: black;
  width: calc(var(--iw) * 0.05);
  height: calc(var(--iw) * 0.05);
  padding: calc(var(--iw) * 0.012);
}
/* HOVER/FOCUS TRANSITIONS ----------------------------- */
@media (hover:hover) {
  .site-toolbar :global(svg) {
    transition-property: transform;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
  }
  .site-toolbar :global(button:hover svg),
  .site-toolbar :global(button:focus-visible svg) {
    transform: scale(1.3);
  }
  .site-toolbar :global(button:focus-visible) {
    outline: calc(var(--iw) * 0.01) solid hsla(0, 0%, 50%, 0.5);
  }
}
</style>