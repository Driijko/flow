<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import { onMount, onDestroy } from "svelte";
  // import { gsap } from "gsap";

  // PROPS ---------------------------------------
  export let direction = "vertical";
  export let trackPosition = 0;

  // ELEMENT REFERENCES ------------------------
  let snapScroll;

  // STATE ---------------------------------
  let scrolling = false;
  let touchStart;
  export let position = 0; // For passing up to parents.

  // SCROLLING ----------------------------
  // let axis = "vertical";
  // function scrollGsap(position) {
  //   if (axis === "vertical") {
  //     gsap.to(".snap-scroll", {
  //       duration: 1,
  //       scrollTop: 
  //     });
  //   }
  // };




  function debounceScroll(delay) {
    console.log(snapScroll.clientWidth);
    scrolling = true;
    const timerId = setTimeout(()=> {
      scrolling = false;
      clearTimeout(timerId);
    }, delay);
  };

  function updatePosition() {
    if (direction === "horizontal") {
      position = Math.round(snapScroll.scrollLeft / snapScroll.clientWidth);
    } else {
      position = Math.round(snapScroll.scrollTop / snapScroll.clientHeight);
    };
    trackPosition = position;
  };

  function respondToScroll() {
    const delay = (
      direction === "horizontal" ? 
      snapScroll.clientWidth : snapScroll.clientHeight
    ) / 1.5;
    debounceScroll(delay);
    const timerId = setTimeout(()=> {
      updatePosition();
      clearTimeout(timerId);
    },delay);
  };

  export const scroll = (direction, multiplier=1) => {
    if (direction === "up") {
      snapScroll.scrollBy(0, -(snapScroll.clientHeight * multiplier));
    }
    else if (direction === "down") {
      snapScroll.scrollBy(0, snapScroll.clientHeight * multiplier);
    }
    else if (direction === "left") {
      snapScroll.scrollBy(-(snapScroll.clientWidth * multiplier), 0);
    }
    else if (direction === "right"){
      snapScroll.scrollBy(snapScroll.clientWidth * multiplier, 0);
    };
    respondToScroll();
  };

  // EVENT HANDLERS ------------------------------
  function handleKeyDown(e) {
    if (direction === "vertical") {
      if (e.key === "ArrowUp" || e.key ==="ArrowDown") {
        e.preventDefault();
        if (e.repeat === false && scrolling === false) {
          if (e.key === "ArrowUp") scroll("up");
          else if (e.key === "ArrowDown") scroll("down");
        }
      }
    } 
    else if (direction === "horizontal") {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
        e.preventDefault();
        if (e.repeat === false && scrolling === false) {
          if (e.key === "ArrowRight") scroll("right");
          else if (e.key === "ArrowLeft") scroll("left");
        }
      }
    };
  };

  function handleWheel(e) {
    e.preventDefault();
    if (scrolling === false) {
      if (direction === "vertical") {
        if (e.deltaY > 0) scroll("down");
        else if (e.deltaY < 0) scroll("up");
      }
      else if (direction === "horizontal") {
        if (e.deltaY > 0) scroll("left");
        else if (e.deltaY < 0) scroll("right");
      }
    };
  };

  function handleTouchStart(e) {
    if (direction === "vertical") {
      touchStart = e.touches[0].clientY;
    } 
    else if (direction === "horizontal") {
      touchStart = e.touches[0].clientX;
    };
  };

  function handleTouchMove(e) {
    e.preventDefault();
  };

  function handleTouchEnd(e) {
    if (direction === "vertical") {
      const touchEnd = e.changedTouches[0].clientY;
      if (touchStart > touchEnd + 5) scroll("down");
      else if (touchStart < touchEnd - 5) scroll("up");
    } 
    else if (direction === "horizontal") {
      const touchEnd = e.changedTouches[0].clientX;
      if (touchStart > touchEnd + 5) scroll("right");
      else if (touchStart < touchEnd - 5) scroll("left");
    };
  };

  function handleScroll(e) {
    if (scrolling === false) {
      const timerId = setTimeout(()=> {
        if (direction === "horizontal") {
          position = Math.round(snapScroll.scrollLeft / snapScroll.clientWidth);
        } else {
          position = Math.round(snapScroll.scrollTop / snapScroll.clientHeight);
        };
        clearTimeout(timerId);
      },500);
    };
  };

  function handleScrollEnd(e) {
    if (direction === "horizontal") {
      position = Math.round(snapScroll.scrollLeft / snapScroll.clientWidth);
    } else {
      position = Math.round(snapScroll.scrollTop / snapScroll.clientHeight);
    };
  };

  // EVENT LISTENERS -------------------------
  onMount(()=> {
    snapScroll.addEventListener("scroll", handleScroll);
    window.addEventListener("keydown", handleKeyDown);
    snapScroll.addEventListener("wheel",handleWheel);
    snapScroll.addEventListener("touchstart",handleTouchStart,{passive:false});
    snapScroll.addEventListener("touchmove", handleTouchMove, {passive:false});
    snapScroll.addEventListener("touchend", handleTouchEnd,{passive:false});
    snapScroll.addEventListener("scrollend", ()=> console.log("hi"));
  });

  onDestroy(()=> {
    window.removeEventListener("keydown", handleKeyDown);
  });

  // REACTIVE ----------------------------------------
  $: if (trackPosition !== position) {
    if (direction === "vertical") {
      if (trackPosition < position) {
        scroll("up", position - trackPosition);
      } else if (trackPosition > position) {
        scroll("down", trackPosition - position);
      }
    }
  }

</script>

<!-- MARKUP ////////////////////////////////// -->
<div bind:this={snapScroll} class="snap-scroll" 
  class:vertical={direction === "vertical"} 
  class:horizontal={direction === "horizontal"}
>
  <slot />
</div>

<!-- STYLES ////////////////////////////////////// -->
<style>
  div {
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
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