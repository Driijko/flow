<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import shift from "../../../scripts/transitions/shift";
  import { linear } from "svelte/easing";
  import siteMenuStore from "../../../scripts/siteMenuStore";

</script>

<!-- MARKUP ///////////////////////////////////-->
<div class="tab-content" 
  in:shift="{{
    x: $siteMenuStore[$siteMenuStore.tab.current].tabPosition < $siteMenuStore[$siteMenuStore.tab.prev].tabPosition ? -window.innerWidth : window.innerWidth, 
    duration: 500, 
    delay: 500,
    easing: linear,
  }}"
  out:shift="{{
    x: $siteMenuStore[$siteMenuStore.tab.current].tabPosition < $siteMenuStore[$siteMenuStore.tab.prev].tabPosition ? window.innerWidth: -window.innerWidth, 
    duration: 500,
    easing: linear,
  }}"
>

  <slot />
</div>