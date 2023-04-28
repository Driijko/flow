<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import siteMenuStore from "../../scripts/siteMenuStore";
  import viewportOrientationStore from "../../scripts/viewport/viewportOrientationStore";
  import SnapScroll from "./SnapScroll.svelte";

  // DATA -------------------------------------
  const lists = [
    [{tag: "music", text: "Music"}, {tag: "painting", text: "Painting"}],
    [
      [{tag: "blues", text: "Blues"}, {tag: "punk", text: "Punk"}],
      [{tag: "abstract-expressionism", text: "Abstract Expressionism"},
      {tag: "fauvism", text: "Fauvism"}],
    ],
    [
      [{tag: "muddy-waters", text: "Muddy Waters"},
      {tag: "ma-rainey", text: "Ma Rainey"}],
      [{tag: "the-stooges", text: "The Stooges"},
      {tag: "bad-brains", text: "Bad Brains"}],
      [{tag: "mark-rothko", text: "Mark Rothko"},
      {tag: "jackson-pollock", text: "Jackson Pollock"}],
      [{tag: "matisse", text: "Matisse"},
      {tag: "andre-derain", text: "Andre Derain"}]
    ]
  ];

  const map = {
    music: 0, 
    painting: 1,
    blues: 0,
    punk: 1,
    "abstract-expressionism": 2,
    fauvism: 3,
  }

  // EVENT HANDLERS --------------------------------------
  let scroll;
  function waitAndScroll() {
    const timerId = setTimeout(()=> {
      scroll("right");
      clearTimeout(timerId);
    },200);
  }
  function handleClick(levelName, levelNum) {
    if (levelNum > $siteMenuStore.navigation.open.length) {
      siteMenuStore.expandNav(levelName);
    } else if (levelNum <= $siteMenuStore.navigation.open.length
    && $siteMenuStore.navigation.open[levelNum - 1] !== levelName) {
      siteMenuStore.collapseNav(levelName, levelNum - 1);
    }
    waitAndScroll();
  };
</script>

<!-- MARKUP ////////////////////////////////////////// -->
<nav>
<SnapScroll direction="horizontal" bind:scroll={scroll}>
  {#each lists as list,listIndex} 

  {#if listIndex === 0}
    <ul id="navigation0">
      {#each list as link}
        <li 
          class:selected={$siteMenuStore.navigation.open[listIndex] === link.tag}
        >
          <a href={link.tag}
            class:column={$viewportOrientationStore === "portrait"}
            on:click|preventDefault={()=> handleClick(link.tag, listIndex + 1)}
          >
            {link.text}
          </a>
        </li>
      {/each}
    </ul>
  
  {:else if $siteMenuStore.navigation.open[listIndex - 1]
  && typeof(map[$siteMenuStore.navigation.open[listIndex - 1]]) === "number"}
    <ul id="navigation{listIndex}">
      {#each list[map[$siteMenuStore.navigation.open[listIndex - 1]]] as link}
        <li
          class:selected={$siteMenuStore.navigation.open[listIndex] === link.tag}
        >
          <a href={link.tag}
            class:column={$viewportOrientationStore === "portrait"}
            on:click|preventDefault={()=> handleClick(link.tag, listIndex + 1)}
          >
            {link.text}
          </a>
        </li>
      {/each}
    </ul>
    
  {/if}
{/each}
</SnapScroll>
</nav>

<style>
  :global(.snap-scroll) {
    border: 4px solid blue;
    width: 400px;
    height: 400px;
  }
ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3em;
}
a.column {
  flex-direction: column;
}
li :global(svg) {
  display: block;
  width: 0;
}
li.selected {
  background-color: black;
  color: white;
}
li.selected :global(svg) {
  width: 0.9em;
}
@media (hover:hover) {
  a:focus-visible {
    background-color: hsl(0, 0%, 70%);
    outline: none !important;
    transform: none;
  }
  a:hover {
    background-color: hsl(50, 0%, 70%);
  }
}
</style>

