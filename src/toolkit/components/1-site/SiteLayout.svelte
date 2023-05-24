<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { layoutBreakpoint } 
  from "../../data/dynamic/layoutBreakpointStore";
  import InterfaceArea from "./interface/InterfaceArea.svelte";
  import SiteToolbar from "./interface/SiteToolbar.svelte";
  import SiteMenuModal from "./interface/site-menu/SiteMenuModal.svelte";
  import SiteMenu from "./interface/site-menu/SiteMenu.svelte";

</script>

<!-- MARKUP /////////////////////////////////////// -->
<div id="this" class="vp" 
  class:center={$layoutBreakpoint !== "large-desktop"}
>

  <slot name="background" />

  {#if $layoutBreakpoint !== "large-desktop"}

    <div class="content-container">
      <slot name="content" />
    </div>

    <div class="interface-vp">
      <div class="interface-container">
        <SiteToolbar />
        <SiteMenuModal>
          <SiteMenu />
        </SiteMenuModal>
      </div>
    </div>

  {:else}

    <InterfaceArea />

    <div class="content-area center">
      <div class="content-container">
        <slot name="content" />
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
</style>