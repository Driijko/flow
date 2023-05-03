<!-- SCRIPTS /////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------
  import { audioBkgTrack, audioBkgRestart, audioBkgLoadPlay, 
    audioBkgFadeLoadPlay, audioBkgUpdateCurrentPlaylistIndex, 
    audioBkgNewPlaylist, audioBkgCurrentPlaylist, audioBkgLoop,
    audioBkgSetLoop
  } from "../../../scripts/audioBkgStore";
  import AudioBkgPlayer from "./AudioBkgPlayer.svelte";
  import playlists from "../../../data/playlists";

  // PROPS -----------------------------------------
  export let identifier = "";

  // SETTINGS ---------------------------------------------
  const fadeDuration = 1500;

  // DATA ------------------------------------------------
  const {tracks, name} = playlists[identifier];

  // EVENT HANDLERS ------------------------------------
  function handleClick(track, index) {
    if ($audioBkgLoop) {
      audioBkgSetLoop(false);
    };
    
    if ($audioBkgTrack.name === track.name) {
      audioBkgRestart();
    } 
    else {
      if ($audioBkgTrack.name === "") {
        audioBkgLoadPlay(track.name, track.path);
        audioBkgNewPlaylist(identifier, tracks);
      } else {
        audioBkgFadeLoadPlay(track.name, track.path, fadeDuration);
        if ($audioBkgCurrentPlaylist.identifier !== identifier) {
          audioBkgNewPlaylist(identifier, tracks);
        }
      };
      audioBkgUpdateCurrentPlaylistIndex(index);
    };
  };
</script>

<!-- MARKUP /////////////////////////////// -->
<section class="audio-bkg-playlist-section">
  <h2>{name}</h2>
  <ul class="audio-bkg-playlist">
    {#each tracks as track, index}
      <li>
        <button type="button" on:click={()=> handleClick(track, index)}>
          {track.name}
        </button>
      </li>
    {/each}
  </ul>
  <AudioBkgPlayer />
</section>