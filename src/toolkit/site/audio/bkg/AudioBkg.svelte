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
    crossFade = (track, duration) => {
      const startingVolume = $audioBkgStore.volume;
      function fadeIn(duration) {
        const tl = gsap.timeline();
        tl.call(audioBkgStore.play,null,0);
        tl.to("#audio-bkg", {duration:duration, volume:startingVolume},0);
      }
      function handleLoad(duration) {
        audioBkgElement.addEventListener("canplay", ()=> fadeIn(duration), {once:true});
      }
      function fadeOut(track, duration) {
        const tl = gsap.timeline();
        tl.to("#audio-bkg", {duration: duration, volume: 0},0);
        tl.call(audioBkgStore.pause,null,duration);
        if ($audioBkgStore.track.path === track.path) {
          tl.call(()=> audioBkgElement.currentTime = 0,null,duration);
          tl.call(fadeIn,[duration],duration);
        } else {
          tl.call(audioBkgStore.load,[track],duration);
          tl.call(handleLoad,[duration],duration);
        }

      }
      fadeOut(track,duration/2);
    }
  });

  // REACTIVE -------------------------------------------------
  $: if ($audioBkgStore.crossFade.registered === false) {
    crossFade(
      $audioBkgStore.crossFade.trackPath,
      $audioBkgStore.crossFade.duration
    );
    audioBkgStore.registerCrossFade();
  };
</script>

<audio bind:this={audioBkgElement} id="audio-bkg"
  src={$audioBkgStore.track.path} bind:paused={$audioBkgStore.paused}
  bind:volume={$audioBkgStore.volume} loop={$audioBkgStore.loop}
  currentTime={$audioBkgStore.currentTime}
></audio>