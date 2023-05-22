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
  import calcUARR from "./toolkit/scripts/utils/calcUARR";
  import { onMount } from "svelte";

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

</style>