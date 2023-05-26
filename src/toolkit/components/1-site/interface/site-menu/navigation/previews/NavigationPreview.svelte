<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------------
  import shift from "../../../../../../scripts/transitions/shift";
  import { layoutBreakpoint } 
  from "../../../../../../data/dynamic/layoutBreakpointStore";

</script>

<!-- MARKUP /////////////////////////// -->
{#if $layoutBreakpoint === "small-desktop"}
  <div class="preview"
    in:shift="{{x: window.innerWidth, duration: 500, delay: 500}}"
    out:shift="{{x: window.innerWidth, duration: 500}}"
  >
    <slot />
  </div>
{:else}
  <div class="preview">
    <slot />
  </div>
{/if}