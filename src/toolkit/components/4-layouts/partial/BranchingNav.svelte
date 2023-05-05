<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------------------
  import { navigationLevels, navigationExpand, navigationCollapse,
    navigationCurrentLevel, setCurrentNavigationLevel 
  } from "../../../scripts/siteMenuStore";
  import SnapScroll from "./SnapScroll.svelte";
  import { newPage } from "../../../scripts/currentPageStore";
  import nav from "../../../data/navigation";

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
    <ul>
      {#each nav.navigation.list as listItem}
        <li>
          <a href={listItem}
            on:click|preventDefault={()=> handleBranchClick(listItem, 1)}
          >
            {nav[listItem].text}
          </a>
        </li>
      {/each}
    </ul>

    <!-- HIGHER LEVELS OF NAVIGATION ----------------------->
    {#each $navigationLevels as navLevel, navLevelIndex}

      <!-- BRANCHING LINK ----------------------------------- -->
      {#if nav[navLevel].type === "branch"}
        <ul>
          {#each nav[navLevel].list as listItem}
            <li>

              <!-- BRANCHING LINK ---------------------------------- -->
              {#if nav[listItem].type === "branch" 
                || nav[listItem].type === "preview"
              }
                <a href={listItem}
                  on:click|preventDefault={
                    ()=> handleBranchClick(listItem,navLevelIndex + 2)
                  }
                >
                  {nav[listItem].text}
                </a>

              <!-- PAGE LINK --------------------------------------- -->
              {:else if nav[listItem].type === "page-link"}
                <a href={listItem}
                  on:click|preventDefault={()=> newPage(listItem)}
                >
                  {nav[listItem].text}
                </a>

              {/if}

            </li>
          {/each}
        </ul>

      <!-- PREVIEW ------------------------------- -->
      {:else if nav[navLevel].type === "preview"}
        <svelte:component this={nav[navLevel].component} />
      {/if}

    {/each}

  </SnapScroll>
</nav>