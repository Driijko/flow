<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------------
  import SiteSettings from "../../5-structures/SiteSettings.svelte";
  import { newPage } from "../../../scripts/currentPageStore";
  import { audioBkgLoadPlay, audioBkgLoad, audioBkgSetLoop } 
  from "../../../scripts/audioBkgStore";

  // Load and loop opening-prompt track.
  audioBkgLoad("Opening Prompt Theme","./assets/audio/bkg/opening-prompt.mp3");
  audioBkgSetLoop(true);

  // EVENT HANDLERS ----------------------------
  function handleClick() {
    newPage("splash");
    audioBkgLoadPlay("Test Music", "./assets/audio/bkg/test-music.mp3");
  };

</script>

<!-- MARKUP //////////////////////////////////////////// -->
<main class="foreground opening-prompt-content">
  <p>Welcome to FLOW</p>
  <p>
    For the best experience,<br class="landscape"/> the following settings are recommended:
  </p>
  <SiteSettings />
  <p>
    You can change these settings later in the menu.
  </p>
  <a on:click|preventDefault={handleClick} href="splash">Ready</a>
</main>

<!-- STYLES /////////////////////////////////////////// -->
<style>
@media (hover:hover) {
  a {
    transition-property: transform, box-shadow;
    transition-duration: 0.5s;
    transition-timing-function: ease-in;
  }
  a:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px black;
  }
}
</style>