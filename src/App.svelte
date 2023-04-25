<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import SiteMenuModal from "./toolkit-new/components/3-layers/site-menu/SiteMenuModal.svelte";
  import BranchingNav from "./toolkit-new/components/5-containers/BranchingNav.svelte";
  import SnapScroll from "./toolkit-new/components/5-containers/SnapScroll.svelte";

  setUp();
</script>

<!-- <AudioBkg />
<SiteMenuModal /> -->
<div>
  <BranchingNav />
</div>


<!-- STYLES //////////////////////////////// -->
<style>
  div {
    border: 4px solid blue;
    width: 50%;
    height: 50vh;
  }
</style>