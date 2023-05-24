<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { siteMenuModal, modals } from "../../../../data/dynamic/modalsStore";

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
    if ($siteMenuModal) {
      animation.close();
    } else {
      animation.open();
    }
  };
</script>

<!-- MARKUP /////////////////////////////////////////// -->
<button type="button" class="site-menu-modal-button" 
  on:click={()=>modals.toggle("siteMenu")}
  class:open={$siteMenuModal}
  class:closed={!($siteMenuModal)}
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
svg {
  width: 100%;
  height: 100%;
}
line {
  stroke-linecap: round;
}
</style>