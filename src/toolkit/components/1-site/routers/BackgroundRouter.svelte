<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import { currentPage } from "../../../data/dynamic/currentPageStore";
</script>

<!-- MARKUP //////////////////////////////////////// -->
{#if $currentPage === "splash"}
  <div>background</div>
{/if}

<!-- STYLES ////////////////////////////////////////// -->
<style>
div {
  background-color: blue;
  width: 100%; height: 100%;
  position: absolute;
  color: red;
}
</style>