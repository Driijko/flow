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
    <div class="lr">
      <slot name="content" />
    </div>
  {:else}
    <InterfaceArea />
    <div class="content-area center">
      <div class="content-container lr">
        <slot />
      </div>
    </div>
  {/if}

</div>

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