<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { layoutBreakpoint } 
  from "../../data/dynamic/layoutBreakpointStore";
  import { currentPageLayout } from "../../data/dynamic/currentPageStore";
  import InterfaceArea from "./InterfaceArea.svelte";

</script>

<!-- MARKUP /////////////////////////////////////// -->
<div id="this" class="vp" 
  class:center={$layoutBreakpoint !== "large-desktop"}
>

  <slot name="vp" />

  {#if $layoutBreakpoint === "mobile"}

    <div class="pr">
      <slot name="uarr" />
    </div>

  {:else if $layoutBreakpoint === "small-desktop"}
    
    <div class="lr">
      <slot name="uarr" />
    </div>

  {:else}
    <InterfaceArea />
    <div class="content-area center">
      <div class="content-container elr">
        <slot name="uarr" />
      </div>

    </div>
  {/if}

</div>

<!-- STYLES //////////////////////////////////////////// -->
<style>
.vp {
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