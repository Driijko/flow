<!-- SCRIPTS /////////////////////////////////////////////// -->
<script>
  // IMPORTS -----------------------------------------------
  import { onMount } from "svelte";
  
  // LOAD EVENT ----------------------------------
  onMount(()=> {
    window.addEventListener("load", ()=>{

    });
    return ()=> {
      window.removeEventListener("load", ()=> {

      });
    };
  });
</script>

<!-- MARKUP /////////////////////////////////////////////////////////// -->
<div class="loading-page vp">
  <p>Loading...</p>
</div>

<!-- STYLES ///////////////////////////////////////////////////////// -->
<style>
  .loading-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>