<!-- SCRIPTS ////////////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------------------------
  import viewportOrientationStore 
  from "../../../../scripts/viewport/viewportOrientationStore";
</script>

<!-- MARKUP //////////////////////////////////////////////////// -->
<div class="uarr-container">
  <div class="uarr">
    {#if $viewportOrientationStore === "portrait"}
      <slot name="portrait-version" />
    {:else}
      <slot name="landscape-version" />
    {/if}
  </div>
</div>