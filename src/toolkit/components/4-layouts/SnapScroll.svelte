<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { viewportOrientation } from "../../data/dynamic/viewportOrientationStore";
    import { snap } from "gsap/gsap-core";

  // PROPS --------------------------------------
  export let axis = "vertical";
  export let trackPosition = 0;
  export let handleScroll = null;
  export let dynamic = false;

  // STATE ------------------------------------------
  let scrolling = false;
  let position = 0;
  let numPositions = 0;
  let touchStart;

  // ELEMENT REFERENCE ---------------------------
  let snapScroll;

  // SCROLL FUNCTIONALITY ---------------------------
  function scroll(newPosition) {
    scrolling = true;

    function scrollEnd(newPosition) {
      position = newPosition;
      trackPosition = newPosition;
      scrolling = false;
      if (handleScroll) {
        handleScroll(newPosition);
      };
    };

    if (axis === "vertical") {
      gsap.to(snapScroll, {
        duration: 0.5,
        ease: "circ.out",
        scrollTop: Math.round(0 + (snapScroll.clientHeight * newPosition)),
      });
    } 
    else {
      gsap.to(snapScroll, {
        duration: 0.5,
        ease: "circ.out",
        scrollLeft: Math.round(0 + (snapScroll.clientWidth * newPosition)),
      });
    };

    gsap.delayedCall(0.5, scrollEnd, [newPosition]);
  };

  // EVENT HANDLERS ------------------------------
  function handleKeyDown(e) {
    if (
      e.key === "ArrowUp" 
      || e.key === "ArrowDown"
      || e.key === "ArrowRight"
      || e.key === "ArrowLeft"
    ) e.preventDefault();

    if (scrolling === false && e.repeat === false) {
      if (dynamic) {
        numPositions = snapScroll.childElementCount;  
      }
      if (axis === "vertical") {
        if (e.key === "ArrowUp" && position > 0) scroll(position - 1);
        else if (
          e.key === "ArrowDown" 
          && position < (numPositions - 1)
        ) scroll(position + 1);
      }
      else if (axis === "horizontal") {
        if (e.key === "ArrowLeft" && position > 0) scroll(position - 1);
        else if (
          e.key === "ArrowRight"
          && position < (numPositions - 1)
        ) scroll(position + 1);
      };
    };
  };

  function handleWheel(e) {
    e.preventDefault();
    if (scrolling === false) {
      if (dynamic) {
        numPositions = snapScroll.childElementCount;  
      }
      if (axis === "vertical") {
        if (e.deltaY > 0 && position < (numPositions - 1)) scroll(position + 1);
        else if (e.deltaY < 0 && position > 0) scroll(position - 1);
      }
      else if (axis === "horizontal") {
        if (e.deltaY < 0 && position < (numPositions - 1)) scroll(position + 1);
        else if (e.deltaY > 0 && position > 0) scroll(position - 1);
      };
    };
  };

  function handleTouchStart(e) {
    if (axis === "vertical") {
      touchStart = e.touches[0].clientY;
    } 
    else if (axis === "horizontal") {
      touchStart = e.touches[0].clientX;
    };
  };

  function handleTouchMove(e) {
    e.preventDefault();
  };

  function handleTouchEnd(e) {
    if (scrolling === false) {
      if (dynamic) {
        numPositions = snapScroll.childElementCount;  
      }
      if (axis === "vertical") {
        const touchEnd = e.changedTouches[0].clientY;
        if (
          touchStart > touchEnd + 5 
          && position < numPositions - 1
        ) scroll(position + 1);
        else if (
          touchStart < touchEnd - 5
          && position > 0
        ) scroll(position - 1);
      } 
      else if (axis === "horizontal") {
        const touchEnd = e.changedTouches[0].clientX;
        if (
          touchStart > touchEnd + 5
          && position < numPositions - 1
        ) scroll(position + 1);
        else if (
          touchStart < touchEnd - 5
          && position > 0
        ) scroll(position - 1);
      };
    };
  };

  // We need this for crunchers, as they alter the number of children
  function handleMutation(mutationsList) {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        numPositions = snapScroll.childElementCount;
        scroll(0);
      }
    }
  }

  // UPDATE STATE ON MOUNT ----------------------------------
  onMount(()=> {
    numPositions = snapScroll.childElementCount; 
  });

  // EVENT LISTENERS -----------------------------------
  onMount(()=> {
    const mutationObserver = new MutationObserver(handleMutation);
    mutationObserver.observe(snapScroll, {childList: true});
    window.addEventListener("keydown", handleKeyDown);
    snapScroll.addEventListener("wheel", handleWheel);
    snapScroll.addEventListener("touchstart",handleTouchStart,{passive:false});
    snapScroll.addEventListener("touchmove", handleTouchMove, {passive:false});
    snapScroll.addEventListener("touchend", handleTouchEnd,{passive:false});

    return () => {
      mutationObserver.disconnect();
      window.removeEventListener("keydown", handleKeyDown);
      snapScroll.removeEventListener("wheel", handleWheel);
      snapScroll.removeEventListener("touchstart",handleTouchStart,{passive:false});
      snapScroll.removeEventListener("touchmove", handleTouchMove, {passive:false});
      snapScroll.removeEventListener("touchend", handleTouchEnd,{passive:false});
    };
  });

  // REACTIVE ----------------------------------------
  $: if (snapScroll && trackPosition !== position && scrolling === false) {
    scroll(trackPosition);
  };

</script>

<!-- MARKUP ////////////////////////////////////// -->
<div bind:this={snapScroll} class="snap-scroll" 
  class:vertical={axis === "vertical"} 
  class:horizontal={axis === "horizontal"}
>
  <slot />
</div>

<!-- STYLES /////////////////////////////////// -->
<style>
div {
  width: 100%;
  height: 100%;
  scrollbar-width: none;  
}
div::-webkit-scrollbar {
  display: none;
}
div.vertical {
  overflow-y: scroll;
}
div.horizontal {
  display: flex;
  overflow-x: scroll;
}
div > :global(*) {
  min-width: 100%;
  min-height: 100%;
}
</style>