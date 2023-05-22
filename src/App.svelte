<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import viewportCSS from "./toolkit/scripts/viewport/viewportCSS";
  import updateOnResize from "./toolkit/scripts/viewport/updateOnResize";
  import { updateLayoutBreakpoint, layoutBreakpoint } 
  from "./toolkit/data/dynamic/layoutBreakpointStore";
  import SiteLayout from "./components/1-site/SiteLayout.svelte";

  updateLayoutBreakpoint();
  viewportCSS();
  updateOnResize();

</script>

<!-- MARKUP ///////////////////////////////////// -->
<SiteLayout >
  <div slot="content">hey</div>
</SiteLayout>


<!-- STYLES ///////////////////////////////////// -->
<style>
 div {
  border: 4px solid blue;
  width: 100%; height: 100%;
 }
</style>