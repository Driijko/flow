<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------------
  import { siteMenuModal } from "../../../data/dynamic/modalsStore";
  import InterfaceAreaButton 
  from "../../6-elements/interface/modal/InterfaceAreaButton.svelte";
  import SiteMenu from "./site-menu/SiteMenu.svelte";

</script>

<!-- MARKUP //////////////////////////////////// -->
<InterfaceAreaButton />
<div class="interface-area center" class:open={$siteMenuModal}>
  
  <div class="stable-overflow center">

    <div class="interface-container">
      <SiteMenu />
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
  max-width: var(--iaw);
}
.stable-overflow {
  position: relative;
  width: var(--iaw);
  height: var(--vph);
}
.interface-container {
  background-color: red;
  color: white;
}
</style>