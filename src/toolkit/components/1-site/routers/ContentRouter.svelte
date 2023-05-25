<!-- SCRIPTS ////////////////////////////////// -->
<script>
  import { currentPage } from "../../../data/dynamic/currentPageStore";

</script>

<!-- MARKUP /////////////////////////////////// -->
{#if $currentPage === "splash"}
<div>
 content
</div>
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