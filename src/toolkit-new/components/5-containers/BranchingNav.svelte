<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import SnapScroll from "./SnapScroll.svelte";

  // STATE ------------------------------------
  let breadcrumbs = [];
  let scroll;

  // EVENT HANDLERS --------------------------
  function handleClick(level, name) {
    function expand(level,name) {
      breadcrumbs[level - 1] = name;
      const timerId = setTimeout(()=> {
        scroll("right");
        clearTimeout(timerId);
      },1);
    }
    if (level > breadcrumbs.length) {
      expand(level, name);
    } 
    else if (level <= breadcrumbs.length 
      && name !== breadcrumbs[level -1]
    ) {
      breadcrumbs = breadcrumbs.map((crumb,index) => {
        if (index < level - 1) {
          return crumb;
        }
      });
      expand(level, name);
    } else {
      scroll("right");
    }
  }

</script>

<!-- MARKUP //////////////////////////////////////// -->
<nav>

  <div class="test">
    {breadcrumbs[0]}<br/>
    {breadcrumbs[1]}<br/>
    {breadcrumbs[2]}<br/>
    {breadcrumbs.length}
  </div>

  <SnapScroll direction="horizontal" bind:scroll={scroll}>

    <ul>
      <li class:selected={breadcrumbs[0] === "music"}>
        <a href="music" 
          on:click|preventDefault={()=> handleClick(1,"music")}
        >
          <h2>MUSIC</h2>
        </a>
      </li>
      <li class:selected={breadcrumbs[0] === "painting"}>
        <a href="painting" 
          on:click|preventDefault={()=> handleClick(1,"painting")}
        >
          <h2>PAINTING</h2>
        </a>
      </li>
    </ul>
  
    {#if breadcrumbs[0] === "music"}
      <ul>
        <li>
          <a href="music/blues"
            on:click|preventDefault={()=> handleClick(2,"blues")}
          >
            <h3>BLUES</h3>
          </a>
        </li>
        <li>
          <a href="music/punk"
            on:click|preventDefault={()=> handleClick(2,"punk")}
          >
            <h3>PUNK</h3>
          </a>
        </li>
      </ul>
    {:else if breadcrumbs[0] === "painting"}
      <ul>
        <li>
          <a href="painting/abstract-expressionism"
            on:click|preventDefault={()=> handleClick(2,"abstract-expressionism")}
          >
            <h3>Abstract Expressionism</h3>
          </a>
        </li>
        <li>
          <a href="painting/fauvism"
            on:click|preventDefault={()=> handleClick(2,"fauvism")}
          >
            <h3>Fauvism</h3>
          </a>
        </li>
      </ul>
    {/if}

    {#if breadcrumbs[1] === "blues"}
      <ul>
        <li>
          <a href="music/blues/muddy-waters"
            on:click|preventDefault={()=> handleClick(3,"muddy-waters")}
          >
            <h4>Muddy Waters</h4>
          </a>
        </li>
        <li>
          <a href="music/blues/ma-rainey"
            on:click|preventDefault={()=> handleClick(3,"ma-rainey")}
          >
            <h4>Ma Rainey</h4>
          </a>
        </li>
      </ul>
    {:else if breadcrumbs[1] === "punk"}
      <ul>
        <li>
          <a href="music/blues/the-stooges"
            on:click|preventDefault={()=> handleClick(3,"the-stooges")}
          >
            <h4>The Stooges</h4>
          </a>
        </li>
        <li>
          <a href="music/blues/bad-brains"
            on:click|preventDefault={()=> handleClick(3,"bad-brains")}
          >
            <h4>Bad Brains</h4>
          </a>
        </li>
      </ul>
    {:else if breadcrumbs[1] === "abstract-expressionism"}
      <ul>
        <li>
          <a href="painting/abstract-expressionism/mark-rothko"
            on:click|preventDefault={()=> handleClick(3,"mark-rothko")}
          >
            <h4>Mark Rothko</h4>
          </a>
        </li>
        <li>
          <a href="painting/abstract-expressionism/jackson-pollock"
            on:click|preventDefault={()=> handleClick(3,"jackson-pollock")}
          >
            <h4>Jackson Pollock</h4>
          </a>
        </li>
      </ul>
    {:else if breadcrumbs[1] === "fauvism"}
      <ul>
        <li>
          <a href="painting/fauvism/Matisse"
            on:click|preventDefault={()=> handleClick(3,"matisse")}
          >
            <h4>Matisse</h4>
          </a>
        </li>
        <li>
          <a href="painting/fauvism/andre-derain"
            on:click|preventDefault={()=> handleClick(3,"andre-derain")}
          >
            <h4>Andre Derain</h4>
          </a>
        </li>
      </ul>
    {/if}

  </SnapScroll>

</nav>

<!-- STYLES /////////////////////////////////// -->
<style>
nav {
  width: 100%;
  height: 100%;
  border: 4px solid magenta;
}
nav :global(.snap-scroll) {
  width: 100%;
  height: 100%;
}
.test {
  position: absolute;
}
ul {
  border: 4px solid green;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
li.selected {
  background-color: black;
  color: white;
}
</style>