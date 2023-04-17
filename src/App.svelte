<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------------
  import setUp from "./toolkit/1-site/setUp";
  import audioBkgStore from "./toolkit/1-site/audio/bkg/audioBkgStore";
  import resizeStore from "./toolkit/1-site/viewport/resizeStore";
  import AudioBkg from "./toolkit/1-site/audio/bkg/AudioBkg.svelte";
  import AudioBkgPlayer from "./toolkit/6-structures/AudioBkgPlayer.svelte";
  import AudioBkgTrackList from "./toolkit/6-structures/AudioBkgTrackList.svelte";
  import AudioBkgPlaylist from "./toolkit/6-structures/AudioBkgPlaylist.svelte";
  import AudioBkgPlaylistMonoUarr from "./toolkit/4-modules/uarr/mono-uarr/AudioBkgPlaylistMonoUARR.svelte";
  import MonoUARR from "./toolkit/4-modules/uarr/mono-uarr/MonoUARR.svelte";
  import VerticalScrollContainer from "./toolkit/5-containers/VerticalScrollContainer.svelte";

  // INITIAL SET UP -------------------------------------------------
  // This function only needs to be run if you are using
  // full-viewport layout techniques.
  setUp();
</script>

<!-- MARKUP //////////////////////////////////////////////// -->
<AudioBkg />
<!-- <AudioBkgPlaylistMonoUarr /> -->
<VerticalScrollContainer>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>10</li>
  </ul>
</VerticalScrollContainer>


<!-- STYLE //////////////////////////////////////////////////////// -->
<style>
li {
  border: 4px solid yellow;
  height: 50px;
}
</style>