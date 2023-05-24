<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit/scripts/setUp";
  import SiteRouter 
  from "./toolkit/components/1-site/routers/SiteRouter.svelte";
  import SiteToolbar from "./toolkit/components/1-site/interface/SiteToolbar.svelte";
  import XIcon from "./toolkit/components/6-elements/icons/interface/XIcon.svelte";

  setUp();

</script>

<!-- MARKUP ///////////////////////////////////// -->
<XIcon />

<!-- STYLES ///////////////////////////////////// -->
<style>
:global(svg) {
  width: 100px;
  height: 100px;
  border: 4px solid green;
  background-color: black;
}
:global(line) {
  stroke: white;
}
</style>