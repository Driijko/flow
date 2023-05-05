<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------------
  import { onMount } from "svelte";
  import { audioBkgTrack, audioBkgPaused, audioBkgVolume, audioBkgLoadPlay,
    audioBkgUpdateTotalTime, audioBkgPlayAfterLoad, audioBkgLoop, audioBkgCurrentTime, audioBkgCurrentPlaylist, audioBkgCurrentPlaylistIndex,
    audioBkgNextPlaylistTrack
  } from "../../scripts/audioBkgStore";

  // ELEMENT REFERENCE -----------------------------------
  let audioBkgElement;

  // STATE ------------------------------------------
  let playlistMode = false;
  let ended = false;

  // EVENT HANDLERS -------------------------------------
  function handleLoadedData(e) {
    audioBkgUpdateTotalTime(e.target.duration);
    if ($audioBkgPlayAfterLoad) {
      e.target.play();
    };
    ended = false;
  };

  function handleEnded(e) {
    if (playlistMode && ended === false) {
      ended = true;
      audioBkgNextPlaylistTrack();
      const track = $audioBkgCurrentPlaylist.tracks[$audioBkgCurrentPlaylistIndex];
      audioBkgLoadPlay(track.name, track.path);
    };
  };

  // EVENT LISTENERS ---------------------------------
  onMount(()=> {
    audioBkgElement.addEventListener("loadeddata", handleLoadedData);
    audioBkgElement.addEventListener("ended", handleEnded);

    return ()=> {
      audioBkgElement.removeEventListener("loadeddata", handleLoadedData);
      audioBkgElement.removeEventListener("ended", handleEnded);
    };
  });

  // REACTIVE -------------------------------------------
  $: if (audioBkgElement) {
    audioBkgElement.volume = $audioBkgVolume;
  };

  $: if ($audioBkgCurrentPlaylist.identifier === "") {
    playlistMode = false;
  } else {
    playlistMode = true;
  };

</script>

<audio bind:this={audioBkgElement} src={$audioBkgTrack.path} 
  bind:paused={$audioBkgPaused} loop={$audioBkgLoop} 
  bind:currentTime={$audioBkgCurrentTime}
></audio>