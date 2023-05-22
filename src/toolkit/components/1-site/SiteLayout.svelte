<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  import { layoutBreakpoint } from "../../data/dynamic/layoutBreakpointStore";
  import InterfaceArea from "./InterfaceArea.svelte";
</script>

<div id="this" class="vp" 
  class:center={$layoutBreakpoint !== "large-desktop"}
>
  <!-- <slot name="vp" /> -->

  {#if $layoutBreakpoint === "mobile"}
    <div class="pr">
      <slot name="content" />
    </div>
  {:else if $layoutBreakpoint === "small-desktop"}
    <div class="elr">
      <slot name="content" />
    </div>
  {:else}
    <InterfaceArea />
    <!-- <div class="content-area center">
      <div class="content-container">
      </div>
    </div> -->
  {/if}

</div>

<style>
  .vp {
    display: flex;
  }
  .interface-area, .content-area {
    height: 100%;
    
  }
  #this :global(.interface-area) {
    flex: 2;
  }
  .content-area {
    flex: 1;
    border: 4px solid red;
  }
  .content-container {
    width: 100%;
    max-width: 1920px;
    padding-bottom: 56.25%;
    border: 4px solid green;
  }
</style>