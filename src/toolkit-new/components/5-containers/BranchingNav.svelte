<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  let breadcrumbs = [];
</script>

<!-- MARKUP //////////////////////////////////////// -->
<nav>

  <div style:width="{100 + (100 * breadcrumbs.length)}%">

    <ul style:width="{100 / (breadcrumbs.length + 1)}%">
      <li>
        <a href="music" 
          on:click|preventDefault={()=> breadcrumbs[0] = "music"}>
          <h2>MUSIC</h2>
        </a>
      </li>
      <li>
        <a href="painting">
          <h2>PAINTING</h2>
        </a>
      </li>
    </ul>
  
    {#if breadcrumbs[0] === "music"}
      <ul style:width="{100 / (breadcrumbs.length + 1)}%">
        <li>
          <a href="music/blues">
            <h3>BLUES</h3>
          </a>
        </li>
        <li>
          <a href="music/punk">
            <h3>PUNK</h3>
          </a>
        </li>
      </ul>
    {/if}

  </div>

</nav>

<!-- STYLES /////////////////////////////////// -->
<style>
nav {
  border: 4px solid green;
  width: 100%;
  height: 100%;
  overflow-x: scroll;
}
div {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  overflow-x: scroll;
}
ul {
  height: 100%;
  border: 4px solid magenta;
}
</style>