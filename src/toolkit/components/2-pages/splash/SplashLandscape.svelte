<!-- SCRIPTS ///////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { setPageExit } from "../../../scripts/currentPageStore";
  import { modals } from "../../../scripts/modalsStore";
  import SplashContent from "./SplashContent.svelte";

  onMount(()=> {

    const tl = gsap.timeline();

    function pageEntrance() {
      tl.from([".a-paths1", ".a-paths2"], {
        duration: 5, ease: "linear", opacity: 0.93
      },0);
      tl.from(".a-paths1", {
        duration: 3, ease: "elastic.out(1, 1)",
        attr: {
          d: "M 0,900 H 1600 L 0,900 Q 0 900 0 900 T 0 900 T 0 900"
        }
      }, 0);
      tl.from(".a-paths2", {
        duration: 8, ease: "elastic.out(2, 1)",
        attr: {
          d: "M 0,0 H 1600 Q 0 500 1600 900 T 0,900"
        }
      }, 0);
      tl.from("h1", {duration: 5, opacity: 0},4);
      tl.from("h2 span", {duration:2, opacity:0, stagger: 0.5},5);
      tl.from(".site-menu-modal-button", {duration:2, opacity:0},7.4)
    };

    function pageExit() {
      modals.close("siteMenu");
      tl.timeScale(3).reverse();
    }

    setPageExit(pageExit, 4000);

    pageEntrance();

  });

</script>

<!-- MARKUP //////////////////////////////// -->
<svg class="background" viewBox="0 0 1600 900">
  <path class="a-paths1" d="M 0,900
    H 1600
    L 1600,0
    Q 1500 500 1200 400
    T 700 400
    T 100 900
  "/>
  <path class="a-paths2" d="M 0,0 
    H 1600
    Q 1500 500 1200 200
    T 0,700
  "/>
</svg>
<div id="this">
  <SplashContent />
</div>

<!-- STYLES ///////////////////////////////// -->
<style>
@media screen and (orientation: landscape) {
  #this :global(header) {
  position: absolute;
  color: white;
  left: 1%;
  top: 1%;
  width: 99%;
  height: 99%;
  border: 1px solid green;
}
#this :global(h1) {
  font-size: calc(var(--uarr-width)/20);
}
#this :global(h2) {
  font-size: calc(var(--uarr-width)/50);
  word-spacing: calc(var(--uarr-width)/300);
  letter-spacing: calc(var(--uarr-width)/1000);
}
#this :global(header .site-menu-modal-button) {
  position: absolute;
  width: 10%;
  height: 15%;
  left: 89%;
  top: 83.3%;
  background-color: hsl(0, 0%, 10%);
}
#this :global(header svg) {
  width: 40%;
}
}
</style>
