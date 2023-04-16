<!-- SCRIPTS ///////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------
  import audioBkgStore from "../site/audio/bkg/audioBkgStore";

  // SETTINGS ---------------------------------------------
  const crossFadeDuration = 3;

  // DATA --------------------------------------------
  const tracks = [
    {path: "./assets/audio/bkg/opening-prompt.mp3",
    name: "Opening Prompt Loop"},
    {path: "./assets/audio/bkg/test-music.mp3",
    name: "Iroh 0"}
  ];

  // EVENT HANDLERS ------------------------------------
  function handleClick(track, index) {
    if ($audioBkgStore.track.name === "") {
      audioBkgStore.load(track);
      audioBkgStore.play();
    } else {
      audioBkgStore.crossFade(track, crossFadeDuration);
    }
    selected = index;
  }
</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<ul>
  {#each tracks as track,index}
    <li>
      <button type="button" 
        on:click={()=> handleClick(track,index)}
      >
        {track.name}
      </button>
    </li>
  {/each}
</ul>
<p>
  {$audioBkgStore.currentTime}
</p>