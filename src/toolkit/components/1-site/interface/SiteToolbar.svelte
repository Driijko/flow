<!-- SCRIPTS /////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------
  import { layoutBreakpoint } from "../../../data/dynamic/layoutBreakpointStore";
  import SiteMenuModalButton 
  from "../../6-elements/interface/modal/SiteMenuModalCloserButton.svelte";
</script>

<!-- MARKUP /////////////////////////////////////// -->
{#if $layoutBreakpoint !== "large-desktop"}
  <div class="site-toolbar"></div>
{/if}