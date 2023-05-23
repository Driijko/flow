<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { layoutBreakpoint } 
  from "../../data/dynamic/layoutBreakpointStore";
  import InterfaceArea from "./InterfaceArea.svelte";

</script>

<!-- MARKUP /////////////////////////////////////// -->
<div id="this" class="vp" 
  class:center={$layoutBreakpoint !== "large-desktop"}
>
  <slot name="squishy" />

  <!-- MOBILE/PORTRAIT ----------------------- -->
  {#if $layoutBreakpoint === "mobile"}

    <div class="pr">
      <slot name="uarr" />
    </div>

  <!-- SMALL DESKTOP ----------------------- -->
  {:else if $layoutBreakpoint === "small-desktop"}
    
    <div class="lr">
      <slot name="uarr" />
    </div>

  <!-- LARGE DESKTOP ----------------------- -->
  {:else}
    <InterfaceArea />
    <div class="content-area center">
      <div class="content-container lr">
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