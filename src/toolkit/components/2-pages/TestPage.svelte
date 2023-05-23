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
  <svg slot="pr" viewBox="0 0 900 1600">
    <defs>
      <pattern id="pattern1" viewBox="0 0 10 10" width="10%" height="10%">
        <circle cx="5" cy="5" r="3" fill="white" />
      </pattern>
    </defs>
    <rect x="0" y="0" width="900" height="1600" fill="grey" />
    <rect x="0" y="0" width="900" height="1600" fill="url(#pattern1)" />
  </svg>
</PageLayout1>