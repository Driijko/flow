<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  import { layoutBreakpoint } from "../../data/dynamic/layoutBreakpointStore";
  import siteSettings from "../../data/static/siteSettings";
</script>

<div class="vp" 
  class:center={$layoutBreakpoint !== "4K"}
>
  <!-- <slot name="vp" /> -->

  {#if $layoutBreakpoint === "mobile"}
    <div class="pr">
      <slot name="content" />
    </div>
  {:else if $layoutBreakpoint === "HD"}
    <div class="elr">
      <slot name="content" />
    </div>
  {:else}
    <div class="interface-area center" 
      style="min-width:{siteSettings.minPortraitWidth}px;max-width:{siteSettings.maxPortraitWidth}px;"
    >
      Interface
    </div>
    <div class="content-area center">
      <div class="elr">content</div>
    </div>
  {/if}

</div>

<style>
  .vp {
    display: flex;
  }
  div {
    border: 4px solid red;
  }
  .interface-area, .content-area {
    height: 100%;
    
  }
  .interface-area {
    flex: 2;
  }
  .content-area {
    flex: 1;
  }
</style>