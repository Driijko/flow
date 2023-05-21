<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import viewportCSS from "./toolkit/scripts/viewport/viewportCSS";
  import updateOnResize from "./toolkit/scripts/viewport/updateOnResize";
  viewportCSS();
  updateOnResize();
</script>

<!-- MARKUP ///////////////////////////////////// -->
<div class="outer vp center">
  <div class="inner lr"></div>
  <div class="inner pr"></div>
</div>

<!-- STYLES ///////////////////////////////////// -->
<style>
.outer {
  border: 4px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inner {
  border: 4px solid green;
  position: absolute;
}
</style>