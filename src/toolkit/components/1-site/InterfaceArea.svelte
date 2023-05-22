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
class:open={$interfaceArea}>
  <!-- <div style="
  min-width:{siteSettings.minInterfaceAreaWidth}px;
  max-width:{siteSettings.maxInterfaceAreaWidth}px;
  ">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, exercitationem? Inventore labore perspiciatis, iste optio dignissimos unde odio vitae, in quisquam provident dolores veritatis earum quam vel architecto enim cumque?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque eos veniam rerum consequatur nisi. Quos iure rem architecto doloribus odit impedit voluptas tenetur. Illum, quae ipsa. Eos veritatis totam sed!
    </p>
  </div> -->
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
  transition-property: max-width;
  transition-timing-function: ease-out;
  transition-duration: 0.5s;
  overflow:hidden;
  max-width: 0;
  background-color: blue;
}
.interface-area.open {
  max-width: var(--interface-area-width);
}

</style>