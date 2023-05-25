<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------------
  import { navigationLevels, navigationExpand, navigationCollapse,
    navigationCurrentLevel, setCurrentNavigationLevel 
  } from "../../../../../data/dynamic/navigationStore";
  import SnapScroll from "../../../../4-layouts/SnapScroll.svelte";
  import { newPage } from "../../../../../data/dynamic/currentPageStore";
  import navigationData from "./navigationData";

  // EVENT HANDLERS ------------------------------
  function handleBranchClick(levelName, levelNum) {
    if (levelNum > $navigationLevels.length) {
      navigationExpand(levelName);
    } 
    else if (
      levelNum <= $navigationLevels.length
      && $navigationLevels[levelNum - 1] !== levelName
    ) {
      navigationCollapse(levelName, levelNum - 1);
    };
    setCurrentNavigationLevel($navigationCurrentLevel + 1);
  };

</script>

<nav>
  <ul class="primary-nav">
    {#each navigationData.navigation.list as listItem}
      <li>
        <a href={listItem}
          on:click|preventDefault={()=> handleBranchClick(listItem, 1)}
        >
          {@html navigationData[listItem].text}
        </a>
      </li>
    {/each}
  </ul>
  <section class="preview-section">
    {#if $navigationLevels[0]}
      <svelte:component this={navigationData[$navigationLevels[0]].component} />
    {/if}
  </section>
</nav>