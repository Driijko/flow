<!-- SCRIPTS ///////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import { audioBkgTrack, audioBkgRestart, audioBkgLoadPlay, 
    audioBkgFadeLoadPlay
  } from "../../../scripts/audioBkgStore";

  // PROPS ---------------------------------------------
  // export let tracks = [];
  // example-------
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

  // SETTINGS ---------------------------------------------
  const fadeDuration = 1500;

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
      }
    }
  }
</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<ul class="audio-bkg-tracklist">
  {#each tracks as track}
    <li>
      <button type="button" on:click={()=> handleClick(track)}>
        {track.name}
      </button>
    </li>
  {/each}
</ul>
