<!-- SCRIPTS //////////////////////////////// -->
<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { setPageExit } from "../../../scripts/currentPageStore";
  import OpeningPromptContent from "./OpeningPromptContent.svelte";

  // ANIMATION -------------------------------------------------
  onMount(()=> {
    const tl1 = gsap.timeline();
    tl1.from(".rect1", {duration: 0.9, attr:{y:900}},0);
    tl1.from(".rect2", {duration: 3, attr:{x:1600}},3);
    tl1.from(".opening-prompt-content > *", {duration:2, opacity: 0,stagger:1},0.6);

    function pageExit() {
      const tl2 = gsap.timeline();
      tl2.to(".opening-prompt-content",{duration: 1, opacity:0},0);
      tl2.to(".rect1",{duration: 0.5, attr:{y:900}},1);
      tl2.to(".rect2",{duration: 0.5, attr:{x:1600}},1);
    }

    setPageExit(pageExit, 2000);
  });
</script>

<!-- MARKUP //////////////////////////////////// -->
<svg class="background" viewBox="0 0 1600 900" >
  <rect class="rect1" x="0" y="270" width="580" height="1600" fill="black" />
  <rect class="rect2" x="1085" y="0" width="515" height="500" fill="black" />
  <rect class="rect2" x="1085" y="670" width="515" height="230" fill="black" />
</svg>
<div id="this">
  <OpeningPromptContent />
</div>

<!-- STYLES ///////////////////////////////// -->
<style>
@media screen and (orientation: landscape) {
#this {
  width: 100%;
  height: 100%;
}
#this :global(.opening-prompt-content > *) {
  position: absolute;
}
#this :global(.opening-prompt-content) {
  font-size: calc(var(--uarr-width)/60);
  line-height: 1.8;
}
#this :global(.opening-prompt-content p:nth-of-type(1)) {
  left: 1%;
  top: 2%;
}
#this :global(.opening-prompt-content p:nth-of-type(2)) {
  left: 1%;
  top: 15%;
}
#this :global(.site-settings) {
  padding-top: calc(var(--uarr-width)/30);
  border: calc(var(--uarr-width)/200) solid black;
  background-color: black;
  color: white;
  width: 30%;
  height: 100%;
  left: 37%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#this :global(.site-settings-option) {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  border-top: calc(var(--uarr-width)/100) solid white;
  border-bottom: calc(var(--uarr-width)/100) solid white;
  margin-bottom: 10%;
}
#this :global(input[type="checkbox"]) {
  border: calc(var(--uarr-width)/200) solid white;
  width: calc(var(--uarr-width)/30);
  height: calc(var(--uarr-width)/30);
}
#this :global(.volume-adjust) {
  height: 30%;
  font-size: calc(var(--uarr-width)/60);
  border-top: calc(var(--uarr-width)/100) solid white;
  border-bottom: calc(var(--uarr-width)/100) solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#this :global(input[type="range"]) {
  width: 70%;
  height: calc(var(--uarr-width)/9);
}
#this :global(input[type="range"]::-webkit-slider-runnable-track) {
  height: 15%;
  width: 100%;
  border-radius: calc(var(--uarr-width)/10);
  border-width: calc(var(--uarr-width)/300);
  border-color: white;
}
#this :global(input[type="range"]::-webkit-slider-thumb) {
  margin-top: -3.5%; 
  border-width: calc(var(--uarr-width)/300);
  border-radius: calc(var(--uarr-width)/10);
  border-color: white;
  background-color: hsl(0, 0%, 20%);
  height: 270%;
  width: 11%;    
}
#this :global(input[type="range"]::-moz-range-track) {
  height: 15%;
  border-radius: calc(var(--uarr-width)/10);
  border-width: calc(var(--uarr-width)/400);
  border-color: white;
}
#this :global(input[type="range"]::-moz-range-thumb) {
  margin-top: -4.5%; 
  border-width: calc(var(--uarr-width)/300);
  border-radius: calc(var(--uarr-width)/10);
  border-color: white;
  background-color: hsl(0, 0%, 20%);
  height: 20%;
  width: 9%;   
}
#this :global(.opening-prompt-content p:nth-of-type(3)) {
  width: 22%;
  left: 74%;
  top: 60%;
}
#this :global(a) {
  border: calc(var(--uarr-width)/200) solid white;
  color: white;
  width: 10%;
  height: 9%;
  position: relative;
  left: 89%;
  top: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(var(--uarr-width)/40);
}
}
</style>