<!-- SCRIPTS ///////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------
  import SiteLayout from "./SiteLayout.svelte";
  import { currentPageName } from "../../data/dynamic/currentPageStore";
  import LoadingPage from "../2-pages/LoadingPage.svelte";

</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<SiteLayout>
  {#if $currentPageName === "loading"}
    <LoadingPage />
  {/if}
</SiteLayout>