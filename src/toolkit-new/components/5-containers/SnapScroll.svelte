<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import { onMount, onDestroy } from "svelte";

  // PROPS ---------------------------------------
  export let direction = "vertical";

  // ELEMENT REFERENCES ------------------------
  let snapScroll;

  // STATE ---------------------------------
  let scrolling = false;
  let shiftKeyDown = false;
  let touchStart;
  export let position = 0; // For passing up to parents.

  // SCROLL FUNCTIONS ----------------------------
  function up ( multiplier=0 ) {
    snapScroll.scrollBy(
      0, -snapScroll.clientHeight - (snapScroll.clientHeight * multiplier)
  );};
  function down ( multiplier=0 ) {
    snapScroll.scrollBy(
      0, snapScroll.clientHeight + (snapScroll.clientHeight * multiplier)
  );};
  function left ( multiplier=0 ) {
    snapScroll.scrollBy(
      -snapScroll.clientWidth - (snapScroll.clientWidth * multiplier), 0
  );};
  function right ( multiplier=0 ) { 
    snapScroll.scrollBy(
      snapScroll.clientWidth + (snapScroll.clientWidth * multiplier), 0
  );};
  export const scroll = (direction, multiplier) => {
    if (direction === "up") up(multiplier);
    else if (direction === "down") down(multiplier);
    else if (direction === "left") left(multiplier);
    else if (direction === "right") right(multiplier);
  }
  function debounceScroll() {
    scrolling = true;
    const timerId = setTimeout(()=> {
      scrolling = false;
      clearTimeout(timerId);
    }, 400);
  };

  // EVENT HANDLERS ------------------------------
  function handleKeyUp(e) {
    if (e.key === "Shift") {
      shiftKeyDown = false;
  }};

  function handleKeyDown(e) {
    if (e.key === "Shift") {
      shiftKeyDown = true;
    }
    else {
      if (direction === "vertical") {
        if (e.key === "ArrowUp" || e.key ==="ArrowDown") {
          e.preventDefault();
          if (e.repeat === false && scrolling === false) {
            debounceScroll();
            if (e.key === "ArrowUp") scroll("up");
            else if (e.key === "ArrowDown") scroll("down");
          }
        }
      } else if (direction === "horizontal") {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
          e.preventDefault();
          if (e.repeat === false && scrolling === false) {
            debounceScroll();
            if (e.key === "ArrowRight") scroll("right");
            else if (e.key === "ArrowLeft") scroll("left");
  }}}}};

  function handleWheel(e) {
    e.preventDefault();
    if (scrolling === false) {
      debounceScroll();
      if (direction === "vertical") {
        if (e.deltaY > 0) scroll("down");
        else if (e.deltaY < 0) scroll("up");
      }
      // else if (direction === "horizontal" && shiftKeyDown) {
      //   if (e.deltaY > 0) scroll("left");
      //   else if (e.deltaY < 0) scroll("right");
      else if (direction === "horizontal") {
        if (e.deltaY > 0) scroll("left");
        else if (e.deltaY < 0) scroll("right");
  }};};

  function handleTouchStart(e) {
    if (direction === "vertical") {
      touchStart = e.touches[0].clientY;
    } else if (direction === "horizontal") {
      touchStart = e.touches[0].clientX;
  }};

  function handleTouchMove(e) {
    e.preventDefault();
  };

  function handleTouchEnd(e) {
    if (direction === "vertical") {
      const touchEnd = e.changedTouches[0].clientY;
      if (touchStart > touchEnd + 5) scroll("down");
      else if (touchStart < touchEnd - 5) scroll("up");
    } else if (direction === "horizontal") {
      const touchEnd = e.changedTouches[0].clientX;
      if (touchStart > touchEnd + 5) scroll("right");
      else if (touchStart < touchEnd - 5) scroll("left");
  }};

  function handleScroll(e) {
    if (scrolling === false) {
      debounceScroll();
      const timerId = setTimeout(()=> {
        if (direction === "horizontal") {
          position = Math.round(snapScroll.scrollLeft / snapScroll.clientWidth);
        } else {
          position = Math.round(snapScroll.scrollTop / snapScroll.clientHeight);
        };
        clearTimeout(timerId);
      },500);
    }
  };

  onMount(()=> {
    // EVENT LISTENERS -------------------------
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    snapScroll.addEventListener("wheel",handleWheel);
    snapScroll.addEventListener("touchstart",handleTouchStart,{passive:false});
    snapScroll.addEventListener("touchmove", handleTouchMove, {passive:false});
    snapScroll.addEventListener("touchend", handleTouchEnd,{passive:false});
    snapScroll.addEventListener("scroll", handleScroll);
  });

  onDestroy(()=> {
    window.removeEventListener("keydown", handleKeyDown);
    window.removeEventListener("keyup", handleKeyUp);
  });

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