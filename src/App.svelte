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

  let container;
  const size = {width: 0, height: 0};
  onMount(()=> {
    const calc = calcUARR(container.offsetWidth, container.offsetHeight, 16, 9, 640, 360);
    size.width = calc.width;
    size.height = calc.height;
  });

</script>

<!-- MARKUP ///////////////////////////////////// -->
<!-- <SiteLayout >
  <div slot="content">hey</div>
</SiteLayout> -->
<!-- <div bind:this={container} class="container">
  <div class="inner"
    style="width:{size.width}px;height:{size.height}px"
  ></div>
</div> -->
<div class="vp center">
  <div class="pr"></div>
</div>


<!-- STYLES ///////////////////////////////////// -->
<style>
 .vp {
  border: 4px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
 }
 .pr {
  background-color: red;
  border: 4px solid green;
 }
</style>