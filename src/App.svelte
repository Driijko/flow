<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------------
  import setUp from "./toolkit/1-site/setUp";
  import audioBkgStore from "./toolkit/1-site/audio/bkg/audioBkgStore";
  import resizeStore from "./toolkit/1-site/viewport/resizeStore";
  import AudioBkg from "./toolkit/1-site/audio/bkg/AudioBkg.svelte";
  import AudioBkgPlayer from "./toolkit/5-structures/AudioBkgPlayer.svelte";
  import AudioBkgTrackList from "./toolkit/5-structures/AudioBkgTrackList.svelte";
  import AudioBkgPlaylist from "./toolkit/5-structures/AudioBkgPlaylist.svelte";
  import AudioBkgPlaylistMonoUarr from "./toolkit/4-modules/uarr/mono-uarr/AudioBkgPlaylistMonoUARR.svelte";
  import MonoUARR from "./toolkit/4-modules/uarr/mono-uarr/MonoUARR.svelte";

  // INITIAL SET UP -------------------------------------------------
  // This function only needs to be run if you are using
  // full-viewport layout techniques.
  setUp();
</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<AudioBkg />
<!-- <AudioBkgPlaylistMonoUarr /> -->
<section class="uarr-container">
  <div class="uarr1"></div>
  <div class="uarr2"></div>
  <div class="uarr"></div>
</section>


<!-- STYLE //////////////////////////////////////////////////////// -->
<style>
  div {
    position: absolute;
  }
  .uarr1 {
    border: 4px solid red;
  }
  .uarr2 {
    border: 4px solid blue;
  }
  .uarr {
    border: 4px solid green;
  }
</style>