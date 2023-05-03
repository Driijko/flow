<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { onMount, onDestroy } from "svelte";
  import UpArrow from "../../6-elements/icons/arrows/UpArrow.svelte";
  import DownArrow from "../../6-elements/icons/arrows/DownArrow.svelte";
  import LeftArrowIcon
  from "../../6-elements/icons/arrows/LeftArrowIcon.svelte";
  import RightArrowIcon
  from "../../6-elements/icons/arrows/RightArrowIcon.svelte";

  // PROPS -----------------------------------------
  export let axis = "vertical";

  // ELEMENT REFERENCE -----------------------------
  let element;

  // STATE ----------------------------------------
  let markers = true;
  let markerStartHighlight = false;
  let markerEndHighlight = false;

  // EVENT HANDLERS -------------------------------
  function handleScroll(e) {
    if (axis === "vertical") {

      if (e.target.scrollTop > 0) {
        markerStartHighlight = true;
      } else {
        markerStartHighlight = false;
      };

      if ( Math.abs(
        e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop
      ) < 1) {
        markerEndHighlight = false;
      } else {
        markerEndHighlight = true;
      };
    }
    else if (axis === "horizontal") {

      if (e.target.scrollLeft > 0) {
        markerStartHighlight = true;
      } else {
        markerStartHighlight = false;
      };

      if ( Math.abs(
        e.target.scrollWidth - e.target.clientWidth - e.target.scrollLeft
      ) < 1) {
        markerEndHighlight = false;
      } else {
        markerEndHighlight = true;
      };
    };
  };

  // REACT ON MOUNT & EVENT LISTENERS --------------------------
  onMount(()=> {
    let overflow = false;

    const verticalOverflow = axis === "vertical" 
      && element.clientHeight < element.scrollHeight;
    const horizontalOverflow = axis === "horizontal"
      && element.clientWidth < element.scrollWidth;

    if (verticalOverflow || horizontalOverflow) {
      overflow = true;
    };

    if (overflow) {
      markers = true;
      markerEndHighlight = true;
      element.addEventListener("scroll",handleScroll);
    };

    return () => {
      element.removeEventListener("scroll",handleScroll);
    };
  });

</script>

<!-- MARKUP ////////////////////////////////////////////////////////// -->
<div class="arrow-highlight-scroll" 
  class:vertical={axis === "vertical"}
>
  {#if (markers)}
  <div class="arrow-highlight-scroll-marker"
    class:highlight={markerStartHighlight}
  >
    {#if axis === "vertical"}
      <UpArrow />
    {:else if axis === "horizontal"}
      <LeftArrowIcon />
    {/if}
  </div>
  {/if}
  <div bind:this={element} class="arrow-highlight-scroll-content"
    class:vertical={axis === "vertical"}
    class:horizontal={axis === "horizontal"}
  >
    <slot />  
  </div>
  {#if (markers)}
  <div class="arrow-highlight-scroll-marker"
    class:highlight={markerEndHighlight}
  >
    {#if axis === "vertical"}
      <DownArrow />
    {:else if axis === "horizontal"}
      <RightArrowIcon />
    {/if}
  </div>
  {/if}
</div>

<!-- STYLES /////////////////////////////////////////////////// -->
<style>
.arrow-highlight-scroll {
  display: flex;
  height: 100%;
  width: 100%;
}
.arrow-highlight-scroll.vertical {
  flex-direction: column;
}
.arrow-highlight-scroll-marker  {
  display: flex;
  justify-content: center;
  align-items: center;
}
.arrow-highlight-scroll-marker.highlight :global(path) {
  fill:red;
}
.arrow-highlight-scroll-content {
  overflow-y: scroll;
  -ms-overflow-style: none;  
  scrollbar-width: none; 
}
.arrow-highlight-scroll-content::-webkit-scrollbar {
  display: none;
}
.arrow-highlight-scroll-content.vertical {
  overflow-y: scroll;
}
.arrow-highlight-scroll-content.horizontal {
  overflow-x: scroll;
  display: flex;
}
</style>