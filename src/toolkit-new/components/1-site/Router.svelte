<!-- SCRIPTS /////////////////////////////////// -->
<script>
  import currentPageStore from "../../scripts/currentPageStore";
  import resizeStore from "../../scripts/viewport/resizeStore";
  import LoadingPage from "../2-pages/LoadingPage.svelte";
</script>

<!-- MARKUP ///////////////////////////////////// -->
{#key $resizeStore}
  {#if $currentPageStore.name === "loading"}
    <LoadingPage />
  {:else if $currentPageStore.name === "opening-prompt"}
    <!-- <OpeningPrompt /> -->
  {:else}
    <!-- <SiteMenu /> -->
    {#if $currentPageStore.name === "splash"}
      <!-- <Splash /> -->
    {:else if $currentPageStore.name === "ambient-light"}
      <!-- <AmbientLight /> -->
    {/if}
  {/if}
{/key}