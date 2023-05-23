<!-- SCRIPTS ///////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------
  import { currentPage } from "../../../data/dynamic/currentPageStore";
  import LoadingPage from "../../2-pages/LoadingPage.svelte";
  import SiteLayout from "../SiteLayout.svelte";
  import BackgroundRouter from "./BackgroundRouter.svelte";
  import ContentRouter from "./ContentRouter.svelte";

</script>

<!-- MARKUP ////////////////////////////////////////////// -->
{#if $currentPage === "loading"}
  <LoadingPage />
{:else}
  <SiteLayout>
    <BackgroundRouter slot="vp" />
    <ContentRouter slot="uarr" />
  </SiteLayout>
{/if}