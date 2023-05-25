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

<!-- MARKUP ////////////////////////////////////////// -->
<nav>
  <SnapScroll axis="horizontal" trackPosition={$navigationCurrentLevel}
    handleScroll={setCurrentNavigationLevel} dynamic={true}
  >

    <!-- BOTTOM LEVEL NAV LIST -------------------------------->
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

    <!-- HIGHER LEVELS OF NAVIGATION ----------------------->
    {#each $navigationLevels as navLevel, navLevelIndex}

      <!-- BRANCHING LINK ----------------------------------- -->
      {#if navigationData[navLevel].type === "branch"}
        <ul>
          {#each navigationData[navLevel].list as listItem}
            <li>

              <!-- BRANCHING LINK ---------------------------------- -->
              {#if navigationData[listItem].type === "branch" 
                || navigationData[listItem].type === "preview"
              }
                <a href={listItem}
                  on:click|preventDefault={
                    ()=> handleBranchClick(listItem,navLevelIndex + 2)
                  }
                >
                  {navigationData[listItem].text}
                </a>

              <!-- PAGE LINK --------------------------------------- -->
              {:else if navigationData[listItem].type === "page-link"}
                <a href={listItem}
                  on:click|preventDefault={()=> newPage(listItem)}
                >
                  {navigationData[listItem].text}
                </a>

              {/if}

            </li>
          {/each}
        </ul>

      <!-- PREVIEW ------------------------------- -->
      {:else if navigationData[navLevel].type === "preview"}
        <svelte:component this={navigationData[navLevel].component} />
      {/if}

    {/each}

  </SnapScroll>
</nav>