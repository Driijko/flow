<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import { onMount } from "svelte";
  import { audioBkgTrack, audioBkgPaused, audioBkgVolume,
    audioBkgUpdateTotalTime, audioBkgUpdateCurrentTime,
    audioBkgPlayAfterLoad, audioBkgLoop
  } from "../../scripts/audioBkgStore";


  // ELEMENT REFERENCE -----------------------------------
  let audioBkgElement;

  // EVENT HANDLERS -------------------------------------
  function handleCanPlay(e) {
    audioBkgUpdateTotalTime(e.target.duration);
    if ($audioBkgPlayAfterLoad) {
      e.target.play();
  }};

  function handleTimeUpdate(e) {
    audioBkgUpdateCurrentTime(e.target.currentTime);
  };

  onMount(()=> {
    // EVENT LISTENERS ---------------------------------
    audioBkgElement.addEventListener("canplay", handleCanPlay);
    audioBkgElement.addEventListener("timeupdate", handleTimeUpdate);
  });

  // REACTIVE -------------------------------------------
  $: if (audioBkgElement) {
    audioBkgElement.volume = $audioBkgVolume;
  };

  // ELEMENT REFERENCE ------------------------------------
  // let audioBkgElement;

  // EVENT HANDLERS --------------------------------------
  // function handleTimeUpdate(e) {
  //   audioBkgStore.currentTime(e.target.currentTime);
  // }

  // function crossFade(track,duration, element) {
  //   console.log("hi");
  //   if (element && $audioBkgStore.crossFade.track.name) {
  //     const startingVolume = $audioBkgStore.volume;
  //     function fadeIn(duration) {
  //       const tl = gsap.timeline();
  //       tl.call(audioBkgStore.play,null,0);
  //       tl.to("#audio-bkg", {duration:duration, volume:startingVolume},0);
  //     }
  //     function handleLoad(duration) {
  //       element.addEventListener("canplay", ()=> fadeIn(duration), {once:true});
  //     }
  //     function fadeOut(track, duration) {
  //       const tl = gsap.timeline();
  //       tl.to("#audio-bkg", {duration: duration, volume: 0},0);
  //       tl.call(audioBkgStore.pause,null,duration);
  //       if ($audioBkgStore.track.path === track.path) {
  //         tl.call(()=> element.currentTime = 0,null,duration);
  //         tl.call(fadeIn,[duration],duration);
  //       } else {
  //         tl.call(audioBkgStore.load,[track],duration);
  //         tl.call(handleLoad,[duration],duration);
  //       }
  //     }
  //     fadeOut(track,duration/2);
  //   }
  // }

  // onMount(()=> {
    // EVENT HANDLERS ---------------------------------------
    // crossFade = (track, duration) => {
    //   const startingVolume = $audioBkgStore.volume;
    //   function fadeIn(duration) {
    //     const tl = gsap.timeline();
    //     tl.call(audioBkgStore.play,null,0);
    //     tl.to("#audio-bkg", {duration:duration, volume:startingVolume},0);
    //   }
    //   function handleLoad(duration) {
    //     audioBkgElement.addEventListener("canplay", ()=> fadeIn(duration), {once:true});
    //   }
    //   function fadeOut(track, duration) {
    //     const tl = gsap.timeline();
    //     tl.to("#audio-bkg", {duration: duration, volume: 0},0);
    //     tl.call(audioBkgStore.pause,null,duration);
    //     if ($audioBkgStore.track.path === track.path) {
    //       tl.call(()=> audioBkgElement.currentTime = 0,null,duration);
    //       tl.call(fadeIn,[duration],duration);
    //     } else {
    //       tl.call(audioBkgStore.load,[track],duration);
    //       tl.call(handleLoad,[duration],duration);
    //     }
    //   }
    //   fadeOut(track,duration/2);
    // };

    // EVENT LISTENERS --------------------------------------
    // audioBkgElement.addEventListener("timeupdate", handleTimeUpdate);
  // });

  // REACTIVE -------------------------------------------------
  // $: $audioBkgStore.crossFade, crossFade(
  //   $audioBkgStore.crossFade.track, $audioBkgStore.crossFade.duration,
  //   audioBkgElement
  // );
  // $: if ($audioBkgStore.crossFade.track.name !== "") {
  //   crossFade($audioBkgStore.crossFade.track, 
  //     $audioBkgStore.crossFade.duration,
  //     audioBkgElement
  // );} 
  // $: if ($audioBkgStore.crossFade.registered === false) {
  //   crossFade(
  //     $audioBkgStore.crossFade.trackPath,
  //     $audioBkgStore.crossFade.duration
  //   );
  //   audioBkgStore.registerCrossFade();
  // };
</script>

<!-- <audio controls bind:this={audioBkgElement} id="audio-bkg" src={$audioBkgStore.track.path}
bind:paused={$audioBkgStore.paused} bind:volume={$audioBkgStore.volume}
loop={$audioBkgStore.loop} bind:duration={$audioBkgStore.totalTime} 
></audio> -->

<audio controls bind:this={audioBkgElement} src={$audioBkgTrack.path} 
  bind:paused={$audioBkgPaused} loop={$audioBkgLoop}
></audio>