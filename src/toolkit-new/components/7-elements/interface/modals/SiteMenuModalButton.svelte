<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import modalsStore from "../../../../scripts/modalsStore";
  import currentPageStore from "../../../../scripts/currentPageStore";

  // ANIMATION --------------------------------------------
  let animation;

  onMount(()=> {

    const animDur = 0.5;

    function menuIcon() {
      gsap.to(".line1", {
        duration: animDur,
        strokeWidth: "20",
        attr: { x1: "10", y1: "10", x2: "90", y2: "10" }
      });
      gsap.to([".line2", ".line3"], {
        duration: animDur,
        strokeWidth: "20",
        attr: { x1: "10", y1: "50", x2: "90", y2: "50"}
      });
      gsap.to(".line4", {
        duration: animDur,
        strokeWidth: "20",
        attr: { x1: "10", y1: "90", x2: "90", y2: "90"}
      });
    };

    function closeIcon() {
      gsap.to([".line1",".line2"], {
        duration: animDur,
        strokeWidth: "15",
        attr: { x1: "20", y1: "20", x2: "80", y2: "80"}
      });
      gsap.to([".line3",".line4"], {
        duration: animDur,
        strokeWidth: "15",
        attr: { x1: "20", y1: "80", x2: "80", y2: "20"}
      });
    };

    animation = {
      open: menuIcon,
      close: closeIcon,
    };
  });

  // REACTIVITY -------------------------------------
  $: if (animation) {
    if ($modalsStore.siteMenu) {
      animation.close();
    } else {
      animation.open();
    }
  };
</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" class="site-menu-modal-button" 
  on:click={()=>modalsStore.toggle("siteMenu")}
  class:splash={$currentPageStore.name === "splash"}
  class:open={$modalsStore.siteMenu}
  class:closed={!($modalsStore.siteMenu)}
>
  <svg viewBox="0 0 100 100">
    <line class="line1" />
    <line class="line2" />
    <line class="line3" />
    <line class="line4" />
  </svg>
</button>

<!-- STYLES /////////////////////////////////////////// -->
<style>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  position: absolute;
  transition-property: width, left, top;
  transition-timing-function: ease-out;
  transition-duration: 1s;
}
svg {
  height: 100%;
}
line {
  stroke: white;
  stroke-linecap: round;
}
</style>