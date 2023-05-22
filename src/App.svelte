<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import viewportCSS from "./toolkit/scripts/viewport/viewportCSS";
  import updateOnResize from "./toolkit/scripts/viewport/updateOnResize";
  import { updateLayoutBreakpoint, layoutBreakpoint } 
  from "./toolkit/data/dynamic/layoutBreakpointStore";

  updateLayoutBreakpoint();
  viewportCSS();
  updateOnResize();

</script>

<!-- MARKUP ///////////////////////////////////// -->
<p>{$layoutBreakpoint}</p>

<!-- STYLES ///////////////////////////////////// -->
<style>

</style>