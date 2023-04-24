<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import currentPageStore from "../../scripts/currentPageStore";
  import modalsStore from "../../scripts/modalsStore";
  import BackArrow from "../7-elements/icons/BackArrow.svelte";
  
  // STATE ---------------------------------------------
  let selected = ""

  // EVENT HANDLERS -----------------------------------
  function handleClick(page) {
    modalsStore.close("siteMenu");
    currentPageStore.newPage(page);
  }
</script>

<nav>
  <!-- MAIN NAV ------------------- -->
  {#if !(selected)}
    <ul>
      <li>
        <a href="music" on:click|preventDefault={()=> selected = "music"}>
          MUSIC
        </a>
      </li>
      <li>
        <a href="about" on:click|preventDefault={()=> handleClick("about")}>
          ABOUT
        </a>
      </li>
      <li>
        <a href="contact" on:click|preventDefault={()=> handleClick("contact")}>
          CONTACT
        </a>
      </li>
    </ul>

  <!-- MUSIC NAV --------------------------------- -->
  {:else if selected === "music"}
    <ul>
      <li>
        <a href="light-ambient" on:click|preventDefault={()=> handleClick("light-ambient")}>
          LIGHT AMBIENT MUSIC
        </a>
      </li>
      <li>
        <a href="dark-ambient" on:click|preventDefault={()=> handleClick("dark-ambient")}>
          DARK AMBIENT MUSIC
        </a>
      </li>
    </ul>
    <button type="button" on:click={()=> selected = ""}>
      <BackArrow />
    </button>
  {/if}
</nav>