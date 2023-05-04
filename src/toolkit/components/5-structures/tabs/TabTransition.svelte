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
    duration: 300, 
    delay: 300,
    easing: linear,
  }}"
  out:shift="{{
    x: currentTabPosition < prevTabPosition ? 
      -window.innerWidth: window.innerWidth, 
    duration: 300,
    easing: linear,
  }}"
>
  <slot />
</div>