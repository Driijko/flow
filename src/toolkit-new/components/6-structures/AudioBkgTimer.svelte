<!-- SCRIPTS ////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------
  import audioBkgStore from "../../scripts/audioBkgStore";
</script>

<!-- MARKUP //////////////////////////////////// -->
<span>
  <span>
    {Math.floor($audioBkgStore.currentTime / 60)}:{
      Math.floor($audioBkgStore.currentTime % 60) < 10 ? 
      `0${Math.floor($audioBkgStore.currentTime % 60)}`
      : Math.floor($audioBkgStore.currentTime % 60)
    }
  </span>
  <span> / </span>
  <span>
    {Math.floor($audioBkgStore.totalTime / 60)}:{Math.floor($audioBkgStore.totalTime % 60)}
  </span>
</span>