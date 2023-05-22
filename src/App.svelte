<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import viewportCSS from "./toolkit/scripts/viewport/viewportCSS";
  import updateOnResize from "./toolkit/scripts/viewport/updateOnResize";
  import { updateLayoutBreakpoint, layoutBreakpoint } 
  from "./toolkit/data/dynamic/layoutBreakpointStore";
  import SiteLayout from "./toolkit/components/1-site/SiteLayout.svelte";
  import InterfaceAreaButton 
  from "./toolkit/components/6-elements/interface/modal/InterfaceAreaButton.svelte";
  import { interfaceArea } from "./toolkit/data/dynamic/modalsStore";

  updateLayoutBreakpoint();
  viewportCSS();
  updateOnResize();

</script>

<!-- MARKUP ///////////////////////////////////// -->
<!-- <SiteLayout >
  <div slot="content">hey</div>
</SiteLayout> -->
<p>{$interfaceArea}</p>
<InterfaceAreaButton />

<!-- STYLES ///////////////////////////////////// -->
<style>
 div {
  border: 4px solid blue;
  width: 100%; height: 100%;
 }
</style>