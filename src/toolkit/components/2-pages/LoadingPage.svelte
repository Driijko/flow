<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------------
  import { onMount } from "svelte";
  import { setPageExit, newPage } from "../../data/dynamic/currentPageStore";

  // PAGE EXIT ----------------------------------
  let fade = false;

  function pageExit() {
    fade = true;
  }

  // setPageExit(pageExit, 2000);

  // EVENT HANDLERS --------------------------
  function handleLoad() {
    // newPage("opening-prompt");
  };
  
  // LOAD EVENT ----------------------------------
  onMount(()=> {
    window.addEventListener("load", handleLoad);
    
    return ()=> {
      window.removeEventListener("load", handleLoad);
    };
  });
</script>

<!-- MARKUP /////////////////////////////////////////////////////////// -->
<div class="loading-page vp" class:fade>
  <div></div>
  <div></div>
  <p>Loading...</p>
</div>

<!-- STYLES ///////////////////////////////////////////////////////// -->
<style>
.loading-page {
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 2s ease-out;
}
.fade {
  opacity: 0;
}
p {
  z-index: 1;
}
.loading-page div {
  position: absolute;
  border-radius: 50%;
  border-style: solid;
  border-color: black;
  border-width: 1vw;
}

.loading-page div:nth-of-type(1) {
  animation: rotateClockwise 4s ease-in-out infinite;
}
.loading-page div:nth-of-type(2) {
  animation: rotateCounterClockwise 4s ease-in-out infinite;
}
/* PORTRAIT -------------------------------- */
@media screen and (orientation: portrait) {
  p {
    font-size: calc(var(--pw)/15);
  }
  .loading-page div {
    width: 40%;
    height: 60%;
    border-width: calc(var(--pw)/50);
  }
}
/* LANDSCAPE -------------------------------- */
@media screen and (orientation: landscape) {
  p {
    font-size: calc(var(--lw)/30);
  }
  .loading-page div {
    width: 50%;
    height: 40%;
    border-width: calc(var(--lh)/100);
  }
}
</style>