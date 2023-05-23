<!-- SCRIPTS ///////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------
  import { currentPageName } from "../../data/dynamic/currentPageStore";
  import LoadingPage from "../2-pages/LoadingPage.svelte";
  import SiteLayout from "./SiteLayout.svelte";
  import SplashPage from "../2-pages/SplashPage.svelte";

</script>

<!-- MARKUP ////////////////////////////////////////////// -->
{#if $currentPageName === "loading"}
  <LoadingPage />
{:else}
  <SiteLayout>
    {#if $currentPageName === "splash"}
      <SplashPage />
    {/if}
  </SiteLayout>
{/if}