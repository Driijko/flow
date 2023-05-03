<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import setUp from "./toolkit-new/scripts/setUp";
  import AudioBkg from "./toolkit-new/components/1-site/AudioBkg.svelte";
  import SiteMenuModal 
  from "./toolkit-new/components/3-layers/site-menu/SiteMenuModal.svelte";
  import SnapScroll 
  from "./toolkit-new/components/5-containers/SnapScroll.svelte";
  import ArrowHighlightScroll
  from "./toolkit-new/components/6-structures/ArrowHighlightScroll.svelte";


  setUp();
</script>

<div>
  <ArrowHighlightScroll axis="vertical" >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolorem totam doloremque voluptatem, a consectetur. Ipsam, porro laudantium beatae delectus totam molestiae ratione, cum provident quas fugit est excepturi exercitationem?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolorem totam doloremque voluptatem, a consectetur. Ipsam, porro laudantium beatae delectus totam molestiae ratione, cum provident quas fugit est excepturi exercitationem?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolorem totam doloremque voluptatem, a consectetur. Ipsam, porro laudantium beatae delectus totam molestiae ratione, cum provident quas fugit est excepturi exercitationem?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolorem totam doloremque voluptatem, a consectetur. Ipsam, porro laudantium beatae delectus totam molestiae ratione, cum provident quas fugit est excepturi exercitationem?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolorem totam doloremque voluptatem, a consectetur. Ipsam, porro laudantium beatae delectus totam molestiae ratione, cum provident quas fugit est excepturi exercitationem?
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dolorem totam doloremque voluptatem, a consectetur. Ipsam, porro laudantium beatae delectus totam molestiae ratione, cum provident quas fugit est excepturi exercitationem?
    </p>
  </ArrowHighlightScroll>
</div>


<!-- STYLES //////////////////////////////// -->
<style>
div {
  border: 4px solid green;
  width: 500px;
  height: 300px;
}
p {
  padding: 20px;
  min-width: 300px;
}
</style>