<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------
  import { onMount, onDestroy } from "svelte";
  import UpArrow from "../7-elements/svg-icons/arrows/UpArrow.svelte";
  import DownArrow from "../7-elements/svg-icons/arrows/DownArrow.svelte";

  // ELEMENT REFERENCE -----------------------------
  let verticalScrollContainerContentElement;

  // STATE ----------------------------------------
  let state = {
    markers: false,
    markerTopHighlight: false,
    markerBottomHighlight: false,
  };

  // EVENT HANDLERS -------------------------------
  function handleScroll(e) {
    if (e.target.scrollTop > 0) {
      state.markerTopHighlight = true;
    } else {
      state.markerTopHighlight = false;
    }
    if (Math.abs(e.target.scrollHeight - e.target.clientHeight - e.target.scrollTop) < 1) {
      state.markerBottomHighlight = false;
    } else {
      state.markerBottomHighlight = true;
    }
  }

  onMount(()=> {
    if (verticalScrollContainerContentElement.clientHeight < verticalScrollContainerContentElement.scrollHeight) {
      state.markers = true;
      state.markerBottomHighlight = true;
      verticalScrollContainerContentElement.addEventListener("scroll",handleScroll);
    }
  });

  onDestroy(()=> {
    verticalScrollContainerContentElement.removeEventListener("scroll",handleScroll);
  });


</script>

<!-- MARKUP ////////////////////////////////////////////////////////// -->
<div class="vertical-scroll-container">
  {#if (state.markers)}
  <div class="vertical-scroll-container-marker"
    class:highlight={state.markerTopHighlight}
  >
    <UpArrow />
  </div>
  {/if}
  <div bind:this={verticalScrollContainerContentElement}
    class="vertical-scroll-container-content"
  >
    <slot />  
  </div>
  {#if (state.markers)}
  <div class="vertical-scroll-container-marker"
    class:highlight={state.markerBottomHighlight}
  >
    <DownArrow />
  </div>
  {/if}
</div>

<!-- STYLES /////////////////////////////////////////////////// -->
<style>
.vertical-scroll-container {
  display: flex;
  flex-direction: column;
}
.vertical-scroll-container-marker  {
  display: flex;
  justify-content: center;
  align-items: center;
}
.vertical-scroll-container-marker.highlight :global(path) {
  fill:red;
}
.vertical-scroll-container-content {
  flex: 1;
  overflow-y: scroll;
}
</style>