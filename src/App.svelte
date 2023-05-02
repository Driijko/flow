<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import SiteMenuModal 
  from "./toolkit-new/components/3-layers/site-menu/SiteMenuModal.svelte";
  import SnapScroll 
  from "./toolkit-new/components/5-containers/SnapScroll.svelte";

  let trackPosition = 0;
  let position;

  setUp();
</script>
<!-- <AudioBkg /> -->
<SiteMenuModal />
<!-- <MusicPage /> -->
<!-- <div class="container">
  <SnapScroll axis="vertical" bind:trackPosition={trackPosition} 
  bind:position={position} >
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
  </SnapScroll>
</div> -->

<!-- <p>
  {position},{trackPosition}
</p>
<button type="button" on:click={()=> trackPosition = 0}>
  Position 0
</button>
<button type="button" on:click={()=> trackPosition = 1}>
  Position 1
</button>
<button type="button" on:click={()=> trackPosition = 2}>
  Position 2
</button>
<button type="button" on:click={()=> trackPosition = 3}>
  Position 3
</button> -->





<!-- STYLES //////////////////////////////// -->
<style>
.container {
  width: 320px;
  height: 480px;
}
div {
  font-size: 100px;
}

</style>