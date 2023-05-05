<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------
  import { audioBkgCurrentTime, audioBkgTotalTime} 
  from "../../../scripts/audioBkgStore"
  
</script>

<!-- MARKUP //////////////////////////////////// -->
{#if $audioBkgTotalTime > 0}
<span class="audio-bkg-timer">
  <span>
    {Math.floor($audioBkgCurrentTime / 60)}:{
    Math.floor($audioBkgCurrentTime % 60) < 10 ? 
    `0${Math.floor($audioBkgCurrentTime % 60)}`
    : Math.floor($audioBkgCurrentTime % 60)}
  </span>
  <span> / </span>
  <span>
    {Math.floor($audioBkgTotalTime / 60)}:{
    Math.floor($audioBkgTotalTime % 60)}
  </span>
</span>
{/if}