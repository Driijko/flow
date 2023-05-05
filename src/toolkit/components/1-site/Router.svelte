<!-- SCRIPTS /////////////////////////////////// -->
<script>
  import { currentPage } from "../../scripts/currentPageStore";
  import resizeStore from "../../scripts/viewport/resizeStore";
  import LoadingPage from "../2-pages/LoadingPage.svelte";
  import AudioBkg from "../1-site/AudioBkg.svelte";
  import OpeningPromptPage 
  from "../2-pages/opening-prompt/OpeningPromptPage.svelte";
  import SplashPage from "../2-pages/splash/SplashPage.svelte";
  import SiteMenuModal from "../3-layers/site-menu/SiteMenuModal.svelte";
  import MusicPage from "../2-pages/music/MusicPage.svelte";
</script>

<!-- MARKUP ///////////////////////////////////// -->
<AudioBkg />

{#key $resizeStore}
  {#if $currentPage === "loading"}
    <LoadingPage />
  {:else if $currentPage === "opening-prompt"}
    <OpeningPromptPage />
  {:else}
    <SiteMenuModal />
    {#if $currentPage === "splash"}
      <SplashPage />
    {:else if $currentPage === "music"}
      <MusicPage />
    {/if}
  {/if}
{/key}