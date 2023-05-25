<!-- SCRIPTS /////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------
  import { layoutBreakpoint } from "../../../../data/dynamic/layoutBreakpointStore";
  import Navigation from "./navigation/Navigation.svelte";
  import SiteMenuModalCloserButton 
  from "../../../6-elements/interface/modal/SiteMenuModalCloserButton.svelte";
  import SiteMenuBreadcrumbs from "./SiteMenuBreadcrumbs.svelte";
  
</script>

<!-- MARKUP /////////////////////////////////// -->
<div class="site-menu" class:portrait={$layoutBreakpoint !== "small-desktop"}
  class:landscape={$layoutBreakpoint === "small-desktop"}
>
  <header>
    <h1>FLOW</h1>
    <h2>A front-end web-development framework</h2>
  </header>

  <SiteMenuBreadcrumbs />

  <Navigation />

  {#if $layoutBreakpoint !== "large-desktop"}
    <SiteMenuModalCloserButton />
  {/if}
</div>



<!-- STYLES ///////////////////////////////////// -->
<style>
.site-menu {
  position: absolute;
  pointer-events: initial;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0%;
  background-color: white;
}

/* GENERAL ----------------------------------------- */
header {
  height: 10%;
  display: flex;
  background-color: grey;
  padding-left: 1%;
}
.site-menu :global(.site-menu-breadcrumbs) {
  background-color: hsl(0, 0%, 20%);
  color: white;
  padding-left: 1%;
}
.site-menu :global(nav) {
  width: 100%;
  background-color: green;
}
.site-menu :global(.site-menu-modal-closer-button) {
  background-color: black;
}
.site-menu :global(.site-menu-modal-closer-button line) {
  stroke: white;
}

/* PORTRAIT ---------------------------------------- */
.site-menu.portrait header {
  flex-direction: column;
  justify-content: center;
  gap: calc(var(--iw)/100);
}
.site-menu.portrait h1 {
  font-size: calc(var(--iw)/14);
}
.site-menu.portrait h2 {
  font-size: calc(var(--iw)/24);
}
.site-menu.portrait :global(.site-menu-breadcrumbs) {
  height: 3.2%;
  font-size: calc(var(--iw)/19.3);
}
.site-menu.portrait :global(.site-menu-breadcrumbs li) {
  padding-right: calc(var(--iw) * 0.02);
}
.site-menu.portrait :global(nav) {
  height: 78.8%;
}
.site-menu.portrait :global(.primary-nav) {
  padding-left: calc(var(--iw) * 0.03);
  font-size: calc(var(--iw) * 0.06);
  line-height: 1.5;
}
.site-menu.portrait :global(.primary-nav li) {
  margin-top: calc(var(--ih) * 0.02);
}
.site-menu.portrait :global(.site-menu-modal-closer-button) {
  width: 100%;
  height: 8%;
  display: flex;
  justify-content: center;
  padding: calc(var(--ih) * 0.015);
}

/* LANDSCAPE --------------------------------------- */
.site-menu.landscape header {
  align-items: center;
  gap: calc(var(--iw)/50);
}
.site-menu.landscape h1 {
  font-size: calc(var(--iw)/30);
}
.site-menu.landscape h2 {
  font-size: calc(var(--iw)/60);
}
.site-menu.landscape :global(.site-menu-breadcrumbs) {
  display: flex;
  align-items: center;
  height: 3%;
  font-size: calc(var(--iw)/80);
  letter-spacing: calc(var(--iw)/1000);
}
.site-menu.landscape :global(.site-menu-breadcrumbs li) {
  padding-right: calc(var(--iw) * 0.005);
}
.site-menu.landscape :global(nav) {
  height: 87%;
  display: flex;
}
.site-menu.landscape :global(.primary-nav) {
  padding-left: calc(var(--iw) * 0.02);
  width: 32%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: calc(var(--ih) * 0.05);
  font-size: calc(var(--iw) * 0.016);
}
.site-menu.landscape :global(.preview-section) {
  background-color: pink;
  width: 68%;
  height: 100%;
}
.site-menu.landscape :global(.site-menu-modal-closer-button) {
  position: absolute;
  width: calc(var(--iw) * 0.057);
  height: calc(var(--iw) * 0.057);
  top: 0%;
  left: 94.3%;
  padding: calc(var(--iw) * 0.01);
}
/* HOVER/FOCUS TRANSITIONS ------------------------------ */
@media (hover:hover) {
  .site-menu :global(.site-menu-modal-closer-button svg) {
    transition-property: transform;
    transition-timing-function: ease-out;
    transition-duration: 0.3s;
  }
  .site-menu :global(.site-menu-modal-closer-button:hover svg),
  .site-menu :global(.site-menu-modal-closer-button:focus-visible svg) {
    transform: scale(1.3);
  }
  .site-menu :global(.site-menu-modal-closer-button:focus-visible) {
    outline: calc(var(--iw) * 0.01) solid hsla(0, 0%, 50%, 0.5);
  }
}
</style>