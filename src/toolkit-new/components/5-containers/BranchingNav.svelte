<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import { onMount, onDestroy } from "svelte";
  import siteMenuStore from "../../scripts/siteMenuStore";
  import viewportOrientationStore from "../../scripts/viewport/viewportOrientationStore";
  import SnapScroll from "./SnapScroll.svelte";

  // UP PROPS ------------------------------
  let scroll; // from SnapScroll
  let position; // from SnapScroll

  // STATE ----------------------------------
  let scrollUpdateReady = false

  // DATA -------------------------------------
  const lists = [
    [{tag: "music", text: "Music"}, {tag: "painting", text: "Painting"}],
    [
      [{tag: "blues", text: "Blues"}, {tag: "punk", text: "Punk"}],
      [{tag: "expressionism", text: "Expressionism"},
      {tag: "fauvism", text: "Fauvism"}],
    ],
    [
      [{tag: "muddy-waters", text: "Muddy Waters"},
      {tag: "ma-rainey", text: "Ma Rainey"}],
      [{tag: "the-stooges", text: "The Stooges"},
      {tag: "bad-brains", text: "Bad Brains"}],
      [{tag: "max-beckmann", text: "Max Beckmann"},
      {tag: "edvard-munch", text: "Edvard Munch"}],
      [{tag: "matisse", text: "Matisse"},
      {tag: "andre-derain", text: "Andre Derain"}]
    ]
  ];

  const map = {
    music: 0, 
    painting: 1,
    blues: 0,
    punk: 1,
    expressionism: 2,
    fauvism: 3,
  }

  // EVENT HANDLERS --------------------------------------
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

  // ONMOUNT ----------------------------------
  onMount(()=> {
    if ($siteMenuStore.navigation.current >= 0) {
    scroll("right", $siteMenuStore.navigation.current);
    scrollUpdateReady = true;
  }
  });

  $: if ($siteMenuStore.navigation.current !== position && scrollUpdateReady) {
    siteMenuStore.currentNav(position);
  }
</script>

<!-- MARKUP ////////////////////////////////////////// -->
<p class="test">
  {$siteMenuStore.navigation.current}
  {position}
</p>
<nav>
<SnapScroll direction="horizontal" bind:scroll={scroll} bind:position={position}>
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
.test {
  position: absolute;
  left: 4%;
  top: 20%;
}
nav {
  width: 100%;
  height: 100%;
}
ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
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