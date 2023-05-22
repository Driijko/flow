<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  import { interfaceArea } from "../../data/dynamic/modalsStore";
  import siteSettings from "../../data/static/siteSettings";
  import InterfaceAreaButton 
  from "../6-elements/interface/modal/InterfaceAreaButton.svelte";
</script>

<!-- MARKUP //////////////////////////////////// -->
<InterfaceAreaButton />
<div class="interface-area center"
class:open={$interfaceArea}
  style="
  min-width:{$interfaceArea ? siteSettings.minPortraitWidth: 0}px;
  max-width:{$interfaceArea ? siteSettings.maxPortraitWidth: 0}px;
  "
>

</div>

<!-- STYLES ////////////////////////////////////// -->
<style>
:global(.interface-area-button) {
  position: fixed;
  width: 25px;
  height: 25px;
  top: calc((var(--vph)/2) - 25px);
  transition-property: top;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;
}
:global(.interface-area-button.open) {
  top: 20px;
}
.interface-area {
  transition-property: min-width, max-width;
  transition-timing-function: ease-out;
  transition-duration: 0.5s;
}
</style>