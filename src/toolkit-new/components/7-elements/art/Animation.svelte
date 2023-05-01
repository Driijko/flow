<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { audioBkgPaused } from "../../../scripts/audioBkgStore";

  // ANIMATIONS --------------------------------------
  const tl = gsap.timeline();

  onMount(()=> {
    tl.to(".a-circles1", {duration: 100, attr:{r: 400}}, 0);
  });

  // REACTIVE -------------------------
  $: if ($audioBkgPaused) {
    tl.pause();
  } else {
    tl.play();
  }

</script>

<!-- MARKUP ////////////////////////////////////// -->
<svg viewBox="0 0 1600 900">
  <circle class="a-circles1" cx="800" cy="450" r="50" />
</svg>

<!-- STYLES /////////////////////////////////// -->
<style>
svg {
  width: 100%;
  height: 100%;
}
</style>