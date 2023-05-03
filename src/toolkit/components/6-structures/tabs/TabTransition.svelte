<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import shift from "../../../scripts/transitions/shift";
  import { linear } from "svelte/easing";
  import { siteMenuTab, getSiteMenuData } from "../../../scripts/siteMenuStore";

  // REACTIVE -----------------------------------
  $: currentTabPosition = getSiteMenuData($siteMenuTab.current, "tabPosition");
  $: prevTabPosition = getSiteMenuData($siteMenuTab.prev, "tabPosition");

</script>

<!-- MARKUP ///////////////////////////////////-->
<div class="tab-content" 
  in:shift="{{
    x: currentTabPosition < prevTabPosition ? 
      -window.innerWidth : window.innerWidth, 
    duration: 500, 
    delay: 500,
    easing: linear,
  }}"
  out:shift="{{
    x: currentTabPosition < prevTabPosition ? 
      -window.innerWidth: window.innerWidth, 
    duration: 500,
    easing: linear,
  }}"
>
  <slot />
</div>