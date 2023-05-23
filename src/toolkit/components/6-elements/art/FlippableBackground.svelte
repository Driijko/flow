<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------
  import { viewportOrientation }
  from "../../../data/dynamic/viewportOrientationStore";

  // PROPS -------------------------------------------------
  export let src = {
    portrait: "",
    landscape: "",
  };

</script>

<!-- MARKUP //////////////////////////////////////////// -->
<div style="
  background-image: url({
    $viewportOrientation === "portrait" ? src.portrait: src.landscape
  })"
></div>

<!-- STYLES //////////////////////////////////////////// -->
<style>
div {
  position: absolute;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 50%;
}
</style>