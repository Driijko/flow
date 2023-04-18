<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------------
  import setUp from "./toolkit/1-site/setUp";
  import audioBkgStore from "./toolkit/1-site/audio/bkg/audioBkgStore";
  import resizeStore from "./toolkit/1-site/viewport/resizeStore";
  import AudioBkg from "./toolkit/1-site/audio/bkg/AudioBkg.svelte";
  import AudioBkgPlayer from "./toolkit/6-structures/AudioBkgPlayer.svelte";
  import AudioBkgTrackList from "./toolkit/6-structures/AudioBkgTrackList.svelte";
  import AudioBkgPlaylistMonoUARR from "./toolkit/4-modules/uarr/mono/AudioBkgPlaylistMonoUARR.svelte";
  import MonoUARR from "./toolkit/4-modules/uarr/mono/MonoUARR.svelte";
  import VerticalScrollContainer from "./toolkit/5-containers/VerticalScrollContainer.svelte";

  // INITIAL SET UP -------------------------------------------------
  // This function only needs to be run if you are using
  // full-viewport layout techniques.
  setUp();
</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<AudioBkg />
<AudioBkgPlaylistMonoUARR />

<!-- STYLE //////////////////////////////////////////////////////// -->
<style>

</style>