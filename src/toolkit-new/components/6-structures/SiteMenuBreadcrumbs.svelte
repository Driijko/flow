<!-- SCRIPTS //////////////////////////////////// -->
<script>
  // IMPORTS -------------------------------
  import { onMount } from "svelte";
  import { siteMenuTab, getSiteMenuData, menuScroll, navigationCurrentLevel } 
  from "../../scripts/siteMenuStore";

  // ELEMENT REFERENCE -----------------------------------
  let breadcrumbsElement;

  // EVENT HANDLERS ------------------------------------
  function handleWheel(e) {
    e.preventDefault();
    breadcrumbsElement.scrollLeft += e.deltaY;
  }

  function handleClick(levelNum) {
    if (levelNum > $navigationCurrentLevel) {
      console.log(levelNum - $navigationCurrentLevel);
      $menuScroll("right", levelNum - $navigationCurrentLevel);
    }
    else if (levelNum < $navigationCurrentLevel) {
      $menuScroll("left", $navigationCurrentLevel - levelNum);
    }
  }

  onMount(()=> {
    breadcrumbsElement.addEventListener("wheel", handleWheel);
  });

  // REACTIVE ------------------------------
  $: tabCurrentLevel = getSiteMenuData($siteMenuTab.current, "currentLevel");
  $: tabLevels = getSiteMenuData($siteMenuTab.current, "levels");

</script>

<!-- MARKUP ///////////////////////////////////////// -->
<!-- <ul bind:this={breadcrumbsElement} 
  class="site-menu-breadcrumbs horizontal-free-scroll"
>
  <li class:current={$tabCurrentLevel === 0}>
    <a href="#{$siteMenuTab.current}0">
      {$siteMenuTab.current}/
    </a>
  </li>
  {#each $tabLevels as level, index}
    <li class:current={$tabCurrentLevel === index + 1}
      class:last={index === $tabLevels.length - 1}
    >
      <a href="#{$siteMenuTab.current}{index + 1}">
        {level}/
      </a>
    </li>
  {/each}
</ul> -->

<ul bind:this={breadcrumbsElement} 
  class="site-menu-breadcrumbs horizontal-free-scroll"
>
  <li class:current={$tabCurrentLevel === 0}>
    <a href="{$siteMenuTab.current}" on:click|preventDefault={()=> handleClick(0)}>
      {$siteMenuTab.current}/
    </a>
  </li>
  {#each $tabLevels as level, index}
    <li class:current={$tabCurrentLevel === index + 1}
      class:last={index === $tabLevels.length - 1}
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
    background-color: black;
    background-color: hsl(0, 0%, 20%);
  }
  li {
    color: hsl(0, 0%, 70%);
    padding-right: 2%;
  }
  li.current {
    color: white;
  }
  li.last {
    padding-right: 5%;
  }
</style>