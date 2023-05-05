<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit/scripts/setUp";
  import Router from "./toolkit/components/1-site/Router.svelte";
  import { currentPage } from "./toolkit/scripts/currentPageStore";

  setUp();

</script>

<!-- MARKUP ///////////////////////////////////// -->
<Router />
<p>
  {$currentPage}
</p>

<!-- STYLES //////////////////////////////////// -->
<style>
  p {
    position: absolute;
    top: 0%;
    left: 0%;
    color: black;
    z-index: 3;
  }
</style>