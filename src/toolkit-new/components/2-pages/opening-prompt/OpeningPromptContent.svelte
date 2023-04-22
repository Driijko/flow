<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import SiteSettings from "../../6-structures/SiteSettings.svelte";
  import audioBkgStore from "../../../scripts/audioBkgStore";

  audioBkgStore.load("./assets/audio/bkg/opening-prompt.mp3");
  audioBkgStore.loop(true);
</script>

<!-- MARKUP //////////////////////////////////////////// -->
<main class="foreground opening-prompt-content">
  <p>Welcome to FLOW</p>
  <p>
    For the best experience the following settings are recommended:
  </p>
  <SiteSettings />
  <p>
    You can change these settings later in the menu.
  </p>
  <a on:click|preventDefault href="link">Ready</a>
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