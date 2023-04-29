<!-- SCRIPTS ///////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import audioBkgStore from "../../../scripts/audioBkgStoreOG";

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
  const crossFadeDuration = 3;

  // EVENT HANDLERS ------------------------------------
  function handleClick(track) {
    if ($audioBkgStore.track.name === track.name) {

    } 
    else {
      if ($audioBkgStore.track.name === "") {
        audioBkgStore.load(track.path, track.name);
        audioBkgStore.play();
      } else {
        audioBkgStore.crossFade(track, crossFadeDuration);
      }
    }
  }
</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<ul class="audio-bkg-track-list">
  {#each tracks as track}
    <li>
      <button type="button" 
        on:click={()=> handleClick(track)}
      >
        {track.name}
      </button>
    </li>
  {/each}
</ul>
