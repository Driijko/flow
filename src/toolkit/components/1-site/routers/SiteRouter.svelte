<!-- SCRIPTS ///////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------
  import { currentPageName } from "../../../data/dynamic/currentPageStore";
  import LoadingPage from "../../2-pages/LoadingPage.svelte";
  import SiteLayout from "../SiteLayout.svelte";
  import SplashPage from "../../2-pages/SplashPage.svelte";
  import BackgroundRouter from "./BackgroundRouter.svelte";
  import ContentRouter from "./ContentRouter.svelte";

</script>

<!-- MARKUP ////////////////////////////////////////////// -->
{#if $currentPageName === "loading"}
  <LoadingPage />
{:else}
  <SiteLayout>
    <BackgroundRouter slot="vp" />
    <ContentRouter slot="uarr" />
  </SiteLayout>
{/if}