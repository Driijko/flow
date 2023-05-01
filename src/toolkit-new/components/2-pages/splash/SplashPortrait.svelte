<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { setPageExit } from "../../../scripts/currentPageStore";
  import { modals } from "../../../scripts/modalsStore";
  import SplashContent from "./SplashContent.svelte";

  onMount(()=> {

    // ANIMATIONS ----------------------------------------
    const tl = gsap.timeline();

    function pageEntrance() {
      // const tl = gsap.timeline();
      tl.from(".rect1", {
        duration: 3, 
        stagger: 0.1, 
        attr:{width: 0}, 
        ease: "elastic.out(10, 1)"
      },0);
      tl.from(".rect2", {
        duration: 3, 
        stagger: 0.1, 
        attr:{x: 900, width: 0},  
        ease: "elastic.out(10, 1)"
      },0);
      tl.from([".rect1", ".rect2"], {duration:5, opacity:0.8},0);
      tl.from("h1", {duration: 3, opacity: 0},4);
      tl.from("h2 span", {stagger: 0.8, duration: 1, opacity: 0},5);
      tl.fromTo(".site-menu-modal-button",
        {opacity:0}, {opacity:1, duration: 3}
      ,8.5);
    };

    function pageExit() {
      tl.timeScale(3).reverse();
      modals.close("siteMenu");
    }

    setPageExit(pageExit, 4000);

    pageEntrance();
    
  });

</script>

<!-- MARKUP ///////////////////////////////////// -->
<svg class="background" viewBox="0 0 900 1600" >
  <rect class="rect1" x="0" y="0" width="451" height="101" fill="black" />
  <rect class="rect2" x="450" y="0" width="450" height="101" fill="black" />
  <rect class="rect1" x="0" y="100" width="451" height="101" fill="black" />
  <rect class="rect2" x="450" y="100" width="450" height="101" fill="black" />
  <rect class="rect1" x="0" y="200" width="75" height="101" fill="black" />
  <rect class="rect2" x="825" y="200" width="75" height="101" fill="black" />
  <rect class="rect1" x="0" y="300" width="75" height="101" fill="black" />
  <rect class="rect2" x="825" y="300" width="75" height="101" fill="black" />
  <rect class="rect1" x="0" y="400" width="75" height="101" fill="black" />
  <rect class="rect2" x="825" y="400" width="75" height="101" fill="black" />
  <rect class="rect1" x="0" y="500" width="175" height="101" fill="black" />
  <rect class="rect2" x="725" y="500" width="175" height="101" fill="black" />
  <rect class="rect1" x="0" y="600" width="50" height="101" fill="black" />
  <rect class="rect2" x="850" y="600" width="50" height="101" fill="black" />
  <rect class="rect1" x="0" y="700" width="50" height="101" fill="black" />
  <rect class="rect2" x="850" y="700" width="50" height="101" fill="black" />
  <rect class="rect1" x="0" y="800" width="100" height="101" fill="black" />
  <rect class="rect2" x="800" y="800" width="100" height="101" fill="black" />
  <rect class="rect1" x="0" y="900" width="125" height="101" fill="black" />
  <rect class="rect2" x="775" y="900" width="125" height="101" fill="black" />
  <rect class="rect1" x="0" y="1000" width="175" height="101" fill="black" />
  <rect class="rect2" x="725" y="1000" width="175" height="101" fill="black" />
  <rect class="rect1" x="0" y="1100" width="200" height="101" fill="black" />
  <rect class="rect2" x="700" y="1100" width="200" height="101" fill="black" />
  <rect class="rect1" x="0" y="1200" width="250" height="101" fill="black" />
  <rect class="rect2" x="650" y="1200" width="250" height="101" fill="black" />
  <rect class="rect1" x="0" y="1300" width="300" height="101" fill="black" />
  <rect class="rect2" x="600" y="1300" width="300" height="101" fill="black" />
  <rect class="rect1" x="0" y="1400" width="350" height="101" fill="black" />
  <rect class="rect2" x="550" y="1400" width="350" height="101" fill="black" />
  <rect class="rect1" x="0" y="1500" width="400" height="101" fill="black" />
  <rect class="rect2" x="500" y="1500" width="400" height="101" fill="black" />
</svg>
<div id="this">
  <SplashContent />
</div>

<!-- STYLES ///////////////////////////////////// -->
<style>
@media screen and (orientation: portrait) {
#this :global(header) {
  width: 100%;
  position: absolute;
  top: 17%;
}
#this :global(h1) {
  text-align: center;
  font-size: calc(var(--uarr-width)/5);
  margin-bottom: 10%;
}
#this :global(h2) {
  line-height: 1.3;
  text-align: center;
  letter-spacing: calc(var(--uarr-width)/200);
  font-size: calc(var(--uarr-width)/15);
}
}
</style>