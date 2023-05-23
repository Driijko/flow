<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { onMount } from "svelte";
  import { layoutBreakpoint } 
  from "../../data/dynamic/layoutBreakpointStore";
  import InterfaceArea from "./InterfaceArea.svelte";

  // ELEMENTS ----------------------------------------
  let mobileContainer;
  let smallDesktopContainer;
  let largeDesktopContainer;


</script>

<!-- MARKUP /////////////////////////////////////// -->
<div id="this" class="vp" 
  class:center={$layoutBreakpoint !== "large-desktop"}
>

  <slot name="vp" />

  {#if $layoutBreakpoint === "mobile"}

    <div bind:this={mobileContainer} class="pr">
      <slot name="uarr" />
    </div>

  {:else if $layoutBreakpoint === "small-desktop"}
    
    <div bind:this={smallDesktopContainer} class="elr">
      <slot name="uarr" />
    </div>

  {:else}
    <InterfaceArea />
    <div class="content-area center">
      <div bind:this={largeDesktopContainer} class="content-container elr">
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