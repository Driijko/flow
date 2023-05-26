<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { layoutBreakpoint } 
  from "../../data/dynamic/layoutBreakpointStore";
  import { siteMenuModal } from "../../data/dynamic/modalsStore";
  import InterfaceArea from "./interface/InterfaceArea.svelte";
  import SiteToolbar from "./interface/SiteToolbar.svelte";
  import SiteMenuModal from "./interface/site-menu/SiteMenuModal.svelte";
  import SiteMenu from "./interface/site-menu/SiteMenu.svelte";
  import SnapScroll from "../4-layouts/SnapScroll.svelte";

</script>

<!-- MARKUP /////////////////////////////////////// -->
<div id="this" class="vp" 
  class:center={$layoutBreakpoint !== "large-desktop"}
>

  <slot name="background" />

  {#if $layoutBreakpoint !== "large-desktop"}

    <div class="content-container" inert={$siteMenuModal}>
      <SnapScroll axis="vertical" >
        <slot name="content" />
      </SnapScroll>
    </div>

    <div class="interface-vp">
      <div class="interface-container">
        <SiteToolbar />
        <SiteMenuModal>
          <SiteMenu />
        </SiteMenuModal>
      </div>
    </div>

  {:else if $layoutBreakpoint === "large-desktop"}

    <InterfaceArea />

    <div class="content-area center">
      <div class="content-container">
        <SnapScroll axis="vertical" >
          <slot name="content" />
        </SnapScroll>
      </div>

    </div>
  {/if}

</div>

<!-- STYLES //////////////////////////////////////////// -->
<style>
#this {
  display: flex;
}
#this :global(.interface-area) {
  flex: 2;
}
.content-area {
  flex: 1;
}
.content-area {
  background-color: skyblue;
}
.content-container {
  background-color: white;
}
.content-container :global(.snap-scroll) {
  height: var(--ch);
}
</style>