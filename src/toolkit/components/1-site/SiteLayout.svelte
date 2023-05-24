<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { layoutBreakpoint } 
  from "../../data/dynamic/layoutBreakpointStore";
  import InterfaceArea from "./interface/InterfaceArea.svelte";
  import SiteInterface from "./interface/SiteInterface.svelte";

</script>

<!-- MARKUP /////////////////////////////////////// -->
<div id="this" class="vp" 
  class:center={$layoutBreakpoint !== "large-desktop"}
>

  <slot name="background" />

  {#if $layoutBreakpoint === "mobile"}

    <div class="content-container">
      <slot name="content" />
    </div>

    <div class="interface-vp">
      <div class="interface-container">
        <SiteInterface />
      </div>
    </div>

  {:else if $layoutBreakpoint === "small-desktop"}
    
    <div class="content-container">
      <slot name="content" />
    </div>

    <div class="interface-vp">
      <div class="interface-container">
        <SiteInterface />
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
.interface-vp {
  background-color: red;
}
.interface-container {
  background-color: pink;
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