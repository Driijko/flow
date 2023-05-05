<!-- SCRIPTS /////////////////////////////////// -->
<script>
  import { currentPage } from "../../scripts/currentPageStore";
  import resizeStore from "../../scripts/viewport/resizeStore";
  import LoadingPage from "../2-pages/LoadingPage.svelte";
  import AudioBkg from "../1-site/AudioBkg.svelte";
</script>

<!-- MARKUP ///////////////////////////////////// -->
<AudioBkg />

{#key $resizeStore}
  {#if $currentPage === "loading"}
    <LoadingPage />
  {:else if $currentPage === "opening-prompt"}
    <!-- <OpeningPrompt /> -->
  {:else}
    <!-- <SiteMenu /> -->
    {#if $currentPage === "splash"}
      <!-- <Splash /> -->
    {:else if $currentPage === "ambient-light"}
      <!-- <AmbientLight /> -->
    {/if}
  {/if}
{/key}