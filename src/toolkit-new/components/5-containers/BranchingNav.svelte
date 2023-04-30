<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  import { onMount } from "svelte";
  import { navigationLevels, navigationExpand, navigationCollapse,
    navigationCurrentLevel, setCurrentNavigationLevel
  } from "../../scripts/siteMenuStore";
  import viewportOrientationStore 
  from "../../scripts/viewport/viewportOrientationStore";
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
  function handleClick(levelName, levelNum) {
    if (levelNum > $navigationLevels.length) {
      navigationExpand(levelName);
    } else if (levelNum <= $navigationLevels.length
    && $navigationLevels[levelNum - 1] !== levelName) {
      navigationCollapse(levelName, levelNum - 1);
    };
    const timerId = setTimeout(()=> {
      scroll("right");
      clearTimeout(timerId);
    },200);
  };

  onMount(()=> {
    // REACT ON MOUNT -----------------
    if ($navigationCurrentLevel >= 0) {
      scroll("right", $navigationCurrentLevel);
      scrollUpdateReady = true;
  }});

  // REACTIVE -----------------------------
  $: if ($navigationCurrentLevel !== position && scrollUpdateReady) {
    setCurrentNavigationLevel(position);
  }

</script>

<!-- MARKUP ////////////////////////////////////////// -->
<nav>
  <SnapScroll direction="horizontal" bind:scroll={scroll} 
    bind:position={position}
  >
    {#each lists as list,listIndex} 
  
    {#if listIndex === 0}
      <ul id="navigation0">

        {#each list as link}
          <li 
            class:selected={ $navigationLevels[listIndex] === link.tag }>
            <a href={link.tag}
              class:column={$viewportOrientationStore === "portrait"}
              on:click|preventDefault={
                ()=> handleClick(link.tag, listIndex + 1)
            }>
              {link.text}
            </a>
          </li>
        {/each}
        
      </ul>
    
    {:else if 
      $navigationLevels[listIndex - 1]
      && typeof(map[$navigationLevels[listIndex - 1]]) === "number"
    }
      <ul id="navigation{listIndex}">

        {#each list[map[$navigationLevels[listIndex - 1]]] as link}
          <li
            class:selected={$navigationLevels[listIndex] === link.tag}>
            <a href={link.tag}
              class:column={$viewportOrientationStore === "portrait"}
              on:click|preventDefault={
                ()=> handleClick(link.tag, listIndex + 1)
            }>
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