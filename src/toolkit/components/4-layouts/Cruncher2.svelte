<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import { viewportOrientation } from "../../data/dynamic/viewportOrientationStore";

</script>

<!-- MARKUP ///////////////////////////////////// -->
{#if $viewportOrientation === "portrait"}
  <div class="cruncher">
    <slot name="slot1" />
  </div>
  <div class="cruncher">
    <slot name="slot2" />
  </div>
{:else if $viewportOrientation === "landscape"}
  <div class="cruncher">
    <slot name="slot1" />
    <slot name="slot2" />
  </div>
{/if}