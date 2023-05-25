<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------
  import { onMount } from "svelte";
  import { setCurrentNavigationLevel, navigationCurrentLevel, navigationLevels } 
  from "../../../../data/dynamic/navigationStore";

  // ELEMENT REFERENCE -----------------------------------
  let breadcrumbsElement;

  // EVENT HANDLERS ------------------------------------
  function handleWheel(e) {
    e.preventDefault();
    breadcrumbsElement.scrollLeft += e.deltaY;
  };

  function handleClick(levelNum) {
    setCurrentNavigationLevel(levelNum);
  };

  // EVENT LISTENERS -------------------------------
  onMount(()=> {
    breadcrumbsElement.addEventListener("wheel", handleWheel);

    return ()=> {
      breadcrumbsElement.removeEventListener("wheel", handleWheel);
    };
  });

</script>

<!-- MARKUP ///////////////////////////////////////// -->
<ul bind:this={breadcrumbsElement} 
  class="site-menu-breadcrumbs"
>
  <li class:current={$navigationCurrentLevel === 0}>
    <a href="navigation" on:click|preventDefault={()=> handleClick(0)}>
      navigation/
    </a>
  </li>
  {#each $navigationLevels as level, index}
    <li class:current={$navigationCurrentLevel === index + 1}
      class:last={index === $navigationLevels.length - 1}
    >
      <a href={level} on:click|preventDefault={()=> handleClick(index + 1)}>
        {level}/
      </a>
    </li>
  {/each}
</ul>


<!-- STYLE ////////////////////////////////////////// -->
<style>
  ul {
    display: flex;
    align-items: center;
  }
  li {
    color: hsl(0, 0%, 70%);
  }
  li.current {
    color: white;
  }
</style>