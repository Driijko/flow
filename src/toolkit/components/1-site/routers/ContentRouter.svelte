<!-- SCRIPTS ////////////////////////////////// -->
<script>
  import { currentPage } from "../../../data/dynamic/currentPageStore";
  import IntroductionPage from "../../2-pages/introduction/IntroductionPage.svelte";

</script>

<!-- MARKUP /////////////////////////////////// -->
{#if $currentPage === "splash"}
  <IntroductionPage />
{/if}

<!-- STYLES /////////////////////////////// -->
<style>
div {
  width: 100%;
  height: 100%;
  background-color: white;
  font-size: calc(var(--cw)/3.5);
}

</style>