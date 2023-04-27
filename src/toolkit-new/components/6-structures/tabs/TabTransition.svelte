<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import shift from "../../../scripts/transitions/shift";
  import { linear } from "svelte/easing";

  // PROPS -----------------------------------
  export let menuTabs;

</script>

<!-- MARKUP ///////////////////////////////////-->
<div class="tab-content" 
  in:shift="{{
    x: menuTabs.current > menuTabs.prev ? window.innerWidth : -window.innerWidth, 
    duration: 500, 
    delay: 500,
    easing: linear,
  }}"
  out:shift="{{
    x: menuTabs.current < menuTabs.prev ? window.innerWidth: -window.innerWidth, 
    duration: 500,
    easing: linear,
  }}"
>
  <slot />
</div>