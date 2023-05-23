<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------------
  import { onMount } from "svelte";
  import calcUARR from "../../scripts/utils/calcUARR";
  import { interfaceArea } from "../../data/dynamic/modalsStore";
  import InterfaceAreaButton 
  from "../6-elements/interface/modal/InterfaceAreaButton.svelte";
    import siteSettings from "../../data/static/siteSettings";

  // ELEMENT REFERENCE -----------------------------
  // let stableOverflowElement;

  // INTERFACE CONTAINER SIZE -----------------------
  // const interfaceContainerSize = {
  //   width: 0,
  //   height: 0,
  // };
  
  // function calcContainerSize() {
  //   const calc = calcUARR(
  //     stableOverflowElement.offsetWidth 
  //     - (siteSettings.interfaceAreaPadding * 2), 
  //     stableOverflowElement.offsetHeight,
  //     siteSettings.portraitUARR[0],
  //     siteSettings.portraitUARR[1]
  //   );
  //   interfaceContainerSize.width = calc.width;
  //   interfaceContainerSize.height = calc.height;
  // }

  // onMount(calcContainerSize);

  // EVENT LISTENERS -----------------------------
  // onMount(()=> {
  //   const observer = new ResizeObserver(calcContainerSize);
  //   observer.observe(stableOverflowElement);
  //   return ()=> observer.unobserve(stableOverflowElement);
  // });

</script>

<!-- MARKUP //////////////////////////////////// -->
<!-- <InterfaceAreaButton />
<div class="interface-area center" class:open={$interfaceArea}>
  
  <div bind:this={stableOverflowElement} class="stable-overflow center">

    <div class="interface-container" style="
      width:{interfaceContainerSize.width}px;
      height:{interfaceContainerSize.height}px;
      "
    >
    </div>
  </div>
</div> -->
<InterfaceAreaButton />
<div class="interface-area center" class:open={$interfaceArea}>
  
  <div class="stable-overflow center">

    <div class="interface-container">
    </div>
  </div>
</div>

<!-- STYLES ////////////////////////////////////// -->
<style>
:global(.interface-area-button) {
  position: fixed;
  width: 25px;
  height: 25px;
  top: calc((var(--vph)/2) - 25px);
  z-index: 1;
}
.interface-area {
  position: relative;
  transition-property: max-width;
  transition-timing-function: ease-out;
  transition-duration: 0.5s;
  overflow:hidden;
  max-width: 0;
  background-color: pink;
}
.interface-area.open {
  max-width: var(--interface-area-width);
}
.stable-overflow {
  position: absolute;
  width: var(--interface-area-width);
  height: var(--vph);
}
.interface-container {
  width: var(--iw);
  height: var(--ih);
  background-color: red;
}
</style>