<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import { onMount, onDestroy } from "svelte";

  // PROPS ---------------------------------------
  export let direction = "vertical";

  // ELEMENT REFERENCES ------------------------
  let snapScroll;

  // STATE ---------------------------------
  let wheelScroll = false;
  let shiftKeyDown = false;
  let touchStart;

  // SCROLL FUNCTIONS ----------------------------
  function up() {snapScroll.scrollBy(0, -snapScroll.clientHeight);};
  function down() {snapScroll.scrollBy(0,snapScroll.clientHeight);};
  function left() {snapScroll.scrollBy(-snapScroll.clientWidth,0);};
  function right() {snapScroll.scrollBy(snapScroll.clientWidth,0);};
  export const scroll = direction => {
    if (direction === "up") up();
    else if (direction === "down") down();
    else if (direction === "left") left();
    else if (direction === "right") right();
  }

  // EVENT HANDLERS ------------------------------
  function handleKeyUp(e) {
    if (e.key === "Shift") {
      shiftKeyDown = false;
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Shift") {
      shiftKeyDown = true;
    }
    else {
      if (direction === "vertical") {
        if (e.key === "ArrowUp" || e.key ==="ArrowDown") {
          e.preventDefault();
          if (e.repeat === false) {
            if (e.key === "ArrowUp") up();
            else if (e.key === "ArrowDown") down();
          }
        }
      } else if (direction === "horizontal") {
        if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
          e.preventDefault();
          if (e.repeat === false) {
            if (e.key === "ArrowRight") right();
            else if (e.key === "ArrowLeft") left();
          }
        }
      }
    }
  };

  function handleWheel(e) {
    e.preventDefault();
    if (wheelScroll === false) {
      wheelScroll = true;

      if (direction === "vertical") {
        if (e.deltaY > 0) down();
        else if (e.deltaY < 0) up();
      }
      else if (direction === "horizontal" && shiftKeyDown) {
        if (e.deltaY > 0) left();
        else if (e.deltaY < 0) right();
      }

      const timerId = setTimeout(()=> {
        wheelScroll = false;
        clearTimeout(timerId);
      }, 500);
    };
  };

  function handleTouchStart(e) {
    if (direction === "vertical") {
      touchStart = e.touches[0].clientY;
    } else if (direction === "horizontal") {
      touchStart = e.touches[0].clientX;
    }
  }

  function handleTouchMove(e) {
    e.preventDefault();
  }

  function handleTouchEnd(e) {
    if (direction === "vertical") {
      const touchEnd = e.changedTouches[0].clientY;
      if (touchStart > touchEnd + 5) down();
      else if (touchStart < touchEnd - 5) up();
    } else if (direction === "horizontal") {
      const touchEnd = e.changedTouches[0].clientX;
      if (touchStart > touchEnd + 5) right();
      else if (touchStart < touchEnd - 5) left();
    }
  }

  onMount(()=> {
    // EVENT LISTENERS -------------------------
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
    snapScroll.addEventListener("wheel",handleWheel);
    snapScroll.addEventListener("touchstart",handleTouchStart,{passive:false});
    snapScroll.addEventListener("touchmove", handleTouchMove, {passive:false});
    snapScroll.addEventListener("touchend", handleTouchEnd,{passive:false});
  });

  onDestroy(()=> {

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