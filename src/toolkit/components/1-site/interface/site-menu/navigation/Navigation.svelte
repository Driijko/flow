<!-- SCRIPTS ///////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import { layoutBreakpoint } 
  from "../../../../../data/dynamic/layoutBreakpointStore";
  import NavigationPortrait from "./NavigationPortrait.svelte";
  import NavigationLandscape from "./NavigationLandscape.svelte";
</script>

<!-- MARKUP /////////////////////////////////// -->
{#if $layoutBreakpoint !== "small-desktop"}
  <NavigationPortrait />
{:else if $layoutBreakpoint === "small-desktop"}
  <NavigationLandscape />
{/if}