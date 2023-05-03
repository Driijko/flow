<!-- SCRIPTS ///////////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { audioBkgTogglePausePlay, audioBkgPaused } 
  from "../../../../scripts/audioBkgStore";

  // ANIMATION ------------------------------------
  const animationDuration = 1;
  let animation;

  onMount(()=> {
    animation = (state, duration) => {
      if (state === "pause") {
        gsap.to(".audio-bkg-pause-play-button path:nth-of-type(1)", {
          duration: duration,
          attr: {
            d: "M 25,20 L 45,20 L 45,80 L 25,80 Z",
          },
        });
        gsap.to(".audio-bkg-pause-play-button path:nth-of-type(2)", {
          duration: duration,
          attr: {
            d: "M 55,20 L 75,20 L 75,80 L 55,80 Z",
          }
        });
      }
      else if (state === "play") {
        gsap.to(".audio-bkg-pause-play-button path:nth-of-type(1)", {
          duration: duration,
          attr: {
            d: "M 20,20 L 51,35.5 L 51,64.5 L 20,80 Z",
          },
        });
        gsap.to(".audio-bkg-pause-play-button path:nth-of-type(2)", {
          duration: duration,
          attr: {
            d: "M 50,35 L 80,50 L 80,50 L 50,65 Z",
          }
        });
      }
    }

    // REACTIVE ON MOUNT --------------------------------------
    if ($audioBkgPaused) {
      animation("play", 0);
    } else {
      animation("pause", 0);
    }
  });

  // EVENT HANDLERS ------------------------------------
  function handleClick() {
    if ($audioBkgPaused) {
      animation("pause", animationDuration);
    } else {
      animation("play", animationDuration);
    }
    audioBkgTogglePausePlay();
  }

  // REACTIVE --------------------------------------
  $: if (animation) {
    if ($audioBkgPaused) {
      animation("play", animationDuration);
    } else {
      animation("pause", animationDuration);
  }}; 

</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
<button class="audio-bkg-pause-play-button" type="button" on:click={handleClick}>
  <svg viewBox="0 0 100 100">
    <path/>
    <path/>
  </svg>
</button>


<!-- STYLES ///////////////////////////////////////////////////// -->
<style>
button {
  border-color: black;
  border-style: solid;
}
svg {
  width: 100%; 
  height: 100%;
}
</style>