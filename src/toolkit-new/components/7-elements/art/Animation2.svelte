<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  onMount(()=> {
    gsap.from(".a-path1", {
      duration: 20,
      strokeWidth: 0,
      stroke: "hsla(0, 100%, 100%, 1)",
      ease: "power.out",
      attr: {
        d: "M 0 0L 0 1600 M 100 0L 100 1600 M 400 0L 200 1600 M 700 0L 300 1600 M 1000 0L 400 1600 M 1300 0L 500 1600 M 1600 0L 600 1600 M 1900 0L 700 1600 M 2200 0L 800 1600 M 2500 0L 900 1600 M 2800 0L 1000 1600 M 3100 0L 1100 1600 M 3400 0L 1200 1600 M 3700 0L 1300 1600 M 4000 0L 1400 1600 M 4300 0L 1500 1600 M 4600 0L 1600 1600 M 4900 0M 0 0 L 1600 0M 0 100 L 1600 200M 0 200 L 1600 400M 0 300 L 1600 600M 0 400 L 1600 800M 0 500 L 1600 1000M 0 600 L 1600 1200M 0 700 L 1600 1400M 0 800 L 1600 1600M 0 900 L 1600 1800"
      }
    })
  });
</script>

<svg viewBox="0 0 1600 900">
  <circle cx="0" cy="0" r="250" />
  <circle cx="100" cy="50" r="250" />
  <circle cx="200" cy="100" r="250" />
  <circle cx="300" cy="150" r="250" />
  <circle cx="400" cy="200" r="250" />
  <circle cx="500" cy="250" r="250" />
  <circle cx="600" cy="300" r="250" />
  <circle cx="700" cy="350" r="250" />
  <circle cx="800" cy="400" r="250" />
  <circle cx="900" cy="450" r="250" />
  <circle cx="1000" cy="500" r="250" />
  <circle cx="1100" cy="550" r="250" />
  <circle cx="1200" cy="600" r="250" />
  <circle cx="1300" cy="650" r="250" />
  <circle cx="1400" cy="700" r="250" />
  <circle cx="1500" cy="750" r="250" />
  <path class="a-path1" d="M 0 0L 0 1600 M 100 0L 100 1600 M 200 0L 200 1600 M 300 0L 300 1600 M 400 0L 400 1600 M 500 0L 500 1600 M 600 0L 600 1600 M 700 0L 700 1600 M 800 0L 800 1600 M 900 0L 900 1600 M 1000 0L 1000 1600 M 1100 0L 1100 1600 M 1200 0L 1200 1600 M 1300 0L 1300 1600 M 1400 0L 1400 1600 M 1500 0L 1500 1600 M 1600 0L 1600 1600 M 1700 0M 0 0 L 1600 0M 0 100 L 1600 100M 0 200 L 1600 200M 0 300 L 1600 300M 0 400 L 1600 400M 0 500 L 1600 500M 0 600 L 1600 600M 0 700 L 1600 700M 0 800 L 1600 800M 0 900 L 1600 900" stroke="hsla(0, 100%, 90%, 1)" stroke-width="50" fill="black" stroke-dasharray="50"></path>
</svg>

<!-- STYLES /////////////////////////////////////////////////// -->
<style>
  svg {
    width: 100%;
  }
  circle {
    fill: hsla(180, 100%, 80%, 0.3);
    stroke: hsla(180, 100%, 75%);
    stroke-width: 3;
  }
</style>