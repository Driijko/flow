<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ----------------------------------
  import SnapScroll from "./SnapScroll.svelte";
  import NavArrowIcon from "../7-elements/icons/arrows/NavArrowIcon.svelte";
  import viewportOrientationStore from "../../scripts/viewport/viewportOrientationStore";

  // PROPS ------------------------------------
  export let updateBreadcrumbs;

  // STATE ------------------------------------
  let breadcrumbs = [];
  let scroll;
  
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

  // EVENT HANDLERS --------------------------
  function handleClick(level, name) {
    function expand(level,name) {
      breadcrumbs[level - 1] = name;
      const timerId = setTimeout(()=> {
        scroll("right");
        clearTimeout(timerId);
      },1);
      updateBreadcrumbs(breadcrumbs.map((value,index) => {
        return {text: value, href: `#nav${index + 1}`};
      }));
    }
    if (level > breadcrumbs.length) {
      expand(level, name);
    } 
    else if (level <= breadcrumbs.length 
      && name !== breadcrumbs[level -1]
    ) {
      breadcrumbs = breadcrumbs.slice(0, level - 1);
      expand(level, name);
    } else {
      scroll("right");
    }
  }

</script>

<!-- MARKUP //////////////////////////////////////// -->
<nav>

  <SnapScroll direction="horizontal" bind:scroll={scroll}>
    {#each lists as list,listIndex}
      {#if listIndex === 0}
        <ul id="nav0">
            {#each list as link}
              <li class:selected={breadcrumbs[listIndex] === link.tag}>
                <a href={link.tag} class:column={$viewportOrientationStore === "portrait"}
                  on:click|preventDefault={()=> handleClick(listIndex + 1, link.tag)}
                >{link.text}<br class="portrait"/> <NavArrowIcon /> </a>
              </li>
            {/each}
        </ul>

      {:else if breadcrumbs[listIndex - 1] && typeof(map[breadcrumbs[listIndex - 1]]) === "number"}
        <ul id="nav{listIndex}">
          {#each list[map[breadcrumbs[listIndex - 1]]] as link,linkIndex}
            <li class:selected={breadcrumbs[listIndex] === link.tag}>
              <a href={link.tag} class:column={$viewportOrientationStore === "portrait"}
                on:click|preventDefault={()=> handleClick(listIndex + 1, link.tag)}
              >{link.text}<NavArrowIcon /> </a>
            </li>
          {/each}
        </ul>
      {/if}
    {/each}
  </SnapScroll>

</nav>

<!-- STYLES /////////////////////////////////// -->
<style>
nav {
  width: 100%;
  height: 100%;
}
nav :global(.snap-scroll) {
  width: 100%;
  height: 100%;
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