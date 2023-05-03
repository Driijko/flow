<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit/scripts/setUp";
  import AudioBkg from "./toolkit/components/1-site/AudioBkg.svelte";
  import SiteMenuModal 
  from "./toolkit/components/3-layers/site-menu/SiteMenuModal.svelte";
  import { audioBkgCurrentPlaylist, audioBkgCurrentPlaylistIndex,
    audioBkgNewPlaylist, audioBkgUpdateCurrentPlaylistIndex, 
    audioBkgNextPlaylistTrack
  } from "./toolkit/scripts/audioBkgStore";
  import playlists from "./toolkit/data/playlists";

  setUp();
</script>

<p>
  Playlist name: {$audioBkgCurrentPlaylist.name}
</p>
<br/>
<p>
  Current Index: {$audioBkgCurrentPlaylistIndex}
</p>
<br/>
{#if $audioBkgCurrentPlaylist.tracks.length > 0}
<p>
  Current Track: 
  {$audioBkgCurrentPlaylist.tracks[$audioBkgCurrentPlaylistIndex].name}
</p>
<br/>
{/if}
<p>
  Tracks:
</p>
<ul>
  {#each $audioBkgCurrentPlaylist.tracks as track}
    <li>{track.name}</li>
  {/each}
</ul>
<br/>
<button type="button" 
  on:click={()=> audioBkgNewPlaylist("Playlist 1", playlists.playlist1)} 
>
  Playlist 1
</button>
<br/>
<button type="button" 
  on:click={()=> audioBkgUpdateCurrentPlaylistIndex(0)} 
>
  Go to track 0
</button>
<br/>
<button type="button" 
  on:click={()=> audioBkgUpdateCurrentPlaylistIndex(1)} 
>
  Go to track 1
</button>
<br/>
<button type="button" 
  on:click={()=> audioBkgNextPlaylistTrack()} 
>
  Next Track
</button>

<!-- STYLES //////////////////////////////// -->
<style>
:global(.audio-bkg-pause-play-button) {
  border-width: 10px;
  width: 100px;
  height: 100px;
}
</style>