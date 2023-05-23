<!-- SCRIPTS ///////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------
  import SiteLayout from "./SiteLayout.svelte";
  import { currentPageName } from "../../data/dynamic/currentPageStore";

</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<SiteLayout>
  {#if $currentPageName === "loading"}

  {/if}
</SiteLayout>