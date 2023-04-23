<!-- SCRIPTS //////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import currentPageStore from "../../../scripts/currentPageStore";
  import OpeningPromptContent from "./OpeningPromptContent.svelte";

  // ANIMATION -------------------------------------------------
  onMount(()=> {
    const tl1 = gsap.timeline();
    tl1.from(".rect1", {duration: 0.5, attr:{width:0}},0);
    tl1.from(".rect2", {duration: 0.5, attr:{x:900}},0);
    tl1.from(".opening-prompt-content > *", {duration:2, opacity: 0,stagger:1},0.5);

    function pageExit() {
      const tl2 = gsap.timeline();
      tl2.to(".opening-prompt-content",{duration: 1, opacity:0},0);
      tl2.to(".rect1",{duration: 0.5, attr:{width:0}},1);
      tl2.to(".rect2",{duration: 0.5, attr:{x:900}},1);
    }

    currentPageStore.exit(2000,pageExit);
  });
</script>

<!-- MARKUP //////////////////////////////////// -->
<svg class="background" viewBox="0 0 900 1600" >
  <rect class="rect1" x="0" y="0" width="120" height="1600" fill="black" />
  <rect class="rect2" x="780" y="0" width="120" height="1600" fill="black" />
</svg>
<div id="this">
  <OpeningPromptContent />
</div>

<!-- STYLES ///////////////////////////////// -->
<style>
@media screen and (orientation: portrait) {
#this {
  width: 100%;
  height: 100%;
}
#this :global(.opening-prompt-content) {
  border: calc(var(--uarr-width)/50) solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: calc(var(--uarr-width)/16);
  text-align: center;
  line-height: 1.3;
}
#this :global(.opening-prompt-content p) {
  padding: 0% 12.5%;
}
#this :global(.site-settings-option) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  border-top: calc(var(--uarr-width)/100) solid black;
  border-bottom: calc(var(--uarr-width)/100) solid black;
  background-color: white;
  margin-bottom: 3%;
}
#this :global(input[type="checkbox"]) {
  border: calc(var(--uarr-width)/100) solid black;
  width: calc(var(--uarr-width)/10);
  height: calc(var(--uarr-width)/10);
}
#this :global(.volume-adjust) {
  height: 40%;
  font-size: calc(var(--uarr-width)/18);
  border-top: calc(var(--uarr-width)/100) solid black;
  border-bottom: calc(var(--uarr-width)/100) solid black;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#this :global(input[type="range"]) {
  width: 50%;
  height: calc(var(--uarr-width)/9);
}
#this :global(input[type="range"]::-webkit-slider-runnable-track) {
  height: 50%;
  width: 50%;
  border-radius: calc(var(--uarr-width)/10);
  border-width: calc(var(--uarr-width)/100);
}
#this :global(input[type="range"]::-webkit-slider-thumb) {
  margin-top: -4.5%; 
  border-width: calc(var(--uarr-width)/100);
  border-radius: calc(var(--uarr-width)/10);
  height: 250%;
  width: 13.5%;    
}
#this :global(input[type="range"]::-moz-range-track) {
  height: 30%;
  border-radius: calc(var(--uarr-width)/10);
  border-width: calc(var(--uarr-width)/100);
}
#this :global(input[type="range"]::-moz-range-thumb) {
  margin-top: -4.5%; 
  border-width: calc(var(--uarr-width)/100);
  border-radius: calc(var(--uarr-width)/10);
  height: 60%;
  width: 10%;   
}
#this :global(a) {
  border: calc(var(--uarr-width)/100) solid black;
  width: 40%;
  height: 9%;
  position: relative;
  left: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(var(--uarr-width)/15);
}
}
</style>