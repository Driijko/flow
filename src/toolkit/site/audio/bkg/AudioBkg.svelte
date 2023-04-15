<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import audioBkgStore from "./audioBkgStore";

  // ELEMENT REFERENCE ------------------------------------
  let audioBkgElement;
  let crossFade;

  onMount(()=> {
    // EVENT HANDLERS ---------------------------------------
    crossFade = (trackPath, duration) => {
      const startingVolume = $audioBkgStore.volume;
      function fadeIn(duration) {
        const tl = gsap.timeline();
        tl.call(audioBkgStore.play,null,0);
        tl.to("#audio-bkg", {duration:duration, volume:startingVolume},0);
      }
      function handleLoad(duration) {
        audioBkgElement.addEventListener("canplay", ()=> fadeIn(duration), {once:true});
      }
      function fadeOut(trackPath, duration) {
        const tl = gsap.timeline();
        tl.to("#audio-bkg", {duration: duration, volume: 0},0);
        tl.call(audioBkgStore.load,[trackPath],duration);
        tl.call(audioBkgStore.pause,null,duration);
        tl.call(handleLoad,[duration],duration);
      }
      fadeOut(trackPath,duration/2);
    }
  });

  // REACTIVE -------------------------------------------------
  $: if ($audioBkgStore.crossFade.registered === false) {
    crossFade(
      $audioBkgStore.crossFade.trackPath,
      $audioBkgStore.crossFade.duration
    );
    audioBkgStore.registerCrossFade();
  }
</script>

<audio controls bind:this={audioBkgElement} id="audio-bkg"
  src={$audioBkgStore.trackPath} bind:paused={$audioBkgStore.paused}
  bind:volume={$audioBkgStore.volume} loop={$audioBkgStore.loop}
></audio>