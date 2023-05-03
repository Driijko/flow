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

  // EVENT LISTENERS ---------------------------------
  onMount(()=> {
    audioBkgElement.addEventListener("loadeddata", handleLoadedData);

    return ()=> {
      audioBkgElement.removeEventListener("loadeddata", handleLoadedData);
    };
  });

  // REACTIVE -------------------------------------------
  $: if (audioBkgElement) {
    audioBkgElement.volume = $audioBkgVolume;
  };

</script>

<audio bind:this={audioBkgElement} src={$audioBkgTrack.path} 
  bind:paused={$audioBkgPaused} loop={$audioBkgLoop} 
  bind:currentTime={$audioBkgCurrentTime}
></audio>