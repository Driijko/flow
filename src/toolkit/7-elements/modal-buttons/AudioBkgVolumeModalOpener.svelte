<!-- SCRIPTS ////////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------------------
  import audioBkgStore from "../../1-site/audio/bkg/audioBkgStore";
  import AudioOnIcon from "../svg-icons/audio/AudioOnIcon.svelte";
  import AudioOffIcon from "../svg-icons/audio/AudioOffIcon.svelte";
</script>

<!-- MARKUP ///////////////////////////////////////////////// -->
<button type="button">
  {#if $audioBkgStore.volume < 0.05}
    <AudioOffIcon />
  {:else}
    <AudioOnIcon />
  {/if}
</button>