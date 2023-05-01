<!-- SCRIPTS ///////////////////////////////////////// -->
<script>
  import { audioBkgTrack } from "../../../scripts/audioBkgStore";
  import Animation from "../../7-elements/art/Animation.svelte";
</script>

<!-- MARKUP /////////////////////////////////////////// -->
{#if $audioBkgTrack.name === "Opening Prompt"}
  <Animation />
{/if}
