<!-- SCRIPTS ///////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------
  import { currentPageName } from "../../data/dynamic/currentPageStore";
  import LoadingPage from "../2-pages/LoadingPage.svelte";
  import TestPage from "../2-pages/TestPage.svelte";

</script>

<!-- MARKUP ////////////////////////////////////////////// -->
{#if $currentPageName === "loading"}
  <LoadingPage />
{:else if $currentPageName === "test"}
  <TestPage />
{/if}