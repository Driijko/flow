<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import { onMount } from "svelte";
  import { audioBkgTrack, audioBkgPaused, audioBkgVolume,
    audioBkgUpdateTotalTime, audioBkgPlayAfterLoad, audioBkgLoop, audioBkgCurrentTime
  } from "../../scripts/audioBkgStore";

  // ELEMENT REFERENCE -----------------------------------
  let audioBkgElement;

  // EVENT HANDLERS -------------------------------------
  function handleLoadedData(e) {
    audioBkgUpdateTotalTime(e.target.duration);
    if ($audioBkgPlayAfterLoad) {
      e.target.play();
  }};

  onMount(()=> {
    // EVENT LISTENERS ---------------------------------
    audioBkgElement.addEventListener("loadeddata", handleLoadedData);
  });

  // REACTIVE -------------------------------------------
  $: if (audioBkgElement) {
    audioBkgElement.volume = $audioBkgVolume;
  };

  // $: if (audioBkgElement) {
  //   if ($audioBkgPaused) {
  //     audioBkgElement.pause();
  //   } else {
  //     audioBkgElement.play();
  //   }
  // };

</script>

<audio bind:this={audioBkgElement} src={$audioBkgTrack.path} 
  bind:paused={$audioBkgPaused} loop={$audioBkgLoop} 
  bind:currentTime={$audioBkgCurrentTime}
></audio>