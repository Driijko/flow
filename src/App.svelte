<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit/scripts/setUp";
  import AudioBkg from "./toolkit/components/1-site/AudioBkg.svelte";
  import SiteMenuModal 
  from "./toolkit/components/3-layers/site-menu/SiteMenuModal.svelte";
  import { audioBkgCurrentPlaylist, audioBkgCurrentPlaylistIndex, 
  } from "./toolkit/scripts/audioBkgStore";
  import AudioBkgPlaylist 
  from "./toolkit/components/5-structures/audio-bkg/AudioBkgPlaylist.svelte";

  setUp();
</script>
<AudioBkg />
<AudioBkgPlaylist identifier="playlist1" />
<br/>
<p>
  Playlist identifier: {$audioBkgCurrentPlaylist.identifier}
</p>
<br/>
<p>
  Playlist Current Index: {$audioBkgCurrentPlaylistIndex}
</p>
<br/>
{#if $audioBkgCurrentPlaylist.tracks.length > 0}
<ul>
  {#each $audioBkgCurrentPlaylist.tracks as track}
    <li>{track.name}</li>
  {/each}
</ul>
{/if}



<!-- STYLES //////////////////////////////// -->
<style>
:global(.audio-bkg-pause-play-button) {
  border-width: 10px;
  width: 100px;
  height: 100px;
}
:global(.audio-bkg-player) {
  display: none;
}
</style>