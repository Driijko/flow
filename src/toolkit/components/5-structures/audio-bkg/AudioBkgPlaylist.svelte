<!-- SCRIPTS /////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------
  import { audioBkgTrack, audioBkgRestart, audioBkgLoadPlay, 
    audioBkgFadeLoadPlay
  } from "../../../scripts/audioBkgStore";
  import AudioBkgPlayer from "./AudioBkgPlayer.svelte";

  // SETTINGS ---------------------------------------------
  const fadeDuration = 1500;

  // DATA ------------------------------------------------
  const tracks = [
    {path: "./assets/audio/bkg/opening-prompt.mp3",
    name: "Opening Prompt Loop"},
    {path: "./assets/audio/bkg/test-music.mp3",
    name: "Iroh 0"},
    {path: "./assets/audio/bkg/opening-prompt.mp3",
    name: "Opening Prompt Loop"},
    {path: "./assets/audio/bkg/test-music.mp3",
    name: "Iroh 0"},
    {path: "./assets/audio/bkg/opening-prompt.mp3",
    name: "Opening Prompt Loop"},
    {path: "./assets/audio/bkg/test-music.mp3",
    name: "Iroh 0"},
    {path: "./assets/audio/bkg/opening-prompt.mp3",
    name: "Opening Prompt Loop"},
    {path: "./assets/audio/bkg/test-music.mp3",
    name: "Iroh 0"},
    {path: "./assets/audio/bkg/opening-prompt.mp3",
    name: "Opening Prompt Loop"},
    {path: "./assets/audio/bkg/test-music.mp3",
    name: "Iroh 0"},
    {path: "./assets/audio/bkg/opening-prompt.mp3",
    name: "Opening Prompt Loop"},
    {path: "./assets/audio/bkg/test-music.mp3",
    name: "Iroh 0"},
    {path: "./assets/audio/bkg/opening-prompt.mp3",
    name: "Opening Prompt Loop"},
    {path: "./assets/audio/bkg/test-music.mp3",
    name: "Iroh 0"},
    {path: "./assets/audio/bkg/opening-prompt.mp3",
    name: "Opening Prompt Loop"},
    {path: "./assets/audio/bkg/test-music.mp3",
    name: "Iroh 0"},
  ];

  // EVENT HANDLERS ------------------------------------
  function handleClick(track) {
    if ($audioBkgTrack.name === track.name) {
      audioBkgRestart();
    } 
    else {
      if ($audioBkgTrack.name === "") {
        audioBkgLoadPlay(track.name, track.path);
      } else {
        audioBkgFadeLoadPlay(track.name, track.path, fadeDuration);
      };
    };
  };
</script>

<!-- MARKUP /////////////////////////////// -->
<section class="audio-bkg-playlist-section">
  <h2>Music Playlist</h2>
  <ul class="audio-bkg-playlist">
    {#each tracks as track}
      <li>
        <button type="button" on:click={()=> handleClick(track)}>
          {track.name}
        </button>
      </li>
    {/each}
  </ul>
  <AudioBkgPlayer />
</section>