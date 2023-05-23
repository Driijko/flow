<!-- SCRIPTS //////////////////////////////////////// -->
<script>
  import { viewportOrientation } 
  from "../../data/dynamic/viewportOrientationStore";
  import PageLayout1 from "./layouts/PageLayout1.svelte";
  import FlippableBackground from "../6-elements/art/FlippableBackground.svelte";
</script>

<!-- MARKUP ///////////////////////////////////// -->
<PageLayout1>
  <FlippableBackground slot="vp"
  src={
    {portrait: "./images/test.jpg", 
    landscape:"./images/test2.jpg"}
  }/>
</PageLayout1>