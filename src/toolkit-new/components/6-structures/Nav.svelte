<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import currentPageStore from "../../scripts/currentPageStore";
  import modalsStore from "../../scripts/modalsStore";
  import BackArrow from "../7-elements/icons/BackArrow.svelte";

  // PROPS -------------------------------------------
  export let navLevel = "";
  export let updateNavLevel;

  // EVENT HANDLERS -----------------------------------
  function handleClick(page) {
    modalsStore.close("siteMenu");
    currentPageStore.newPage(page);
  }
</script>

<nav>
  <!-- MAIN NAV ------------------- -->
  {#if !(navLevel)}
    <ul>
      <li>
        <a href="music" on:click|preventDefault={()=> updateNavLevel("music")}>
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
  {:else if navLevel === "music"}
    <ul>
      <li>
        <a href="light-ambient" on:click|preventDefault={()=> handleClick("light-ambient")}>
          LIGHT<br class="portrait"/> AMBIENT MUSIC
        </a>
      </li>
      <li>
        <a href="dark-ambient" on:click|preventDefault={()=> handleClick("dark-ambient")}>
          DARK<br class="portrait"/>AMBIENT MUSIC
        </a>
      </li>
      <li>
        <button class="nav-back-button" type="button" on:click={()=> updateNavLevel("")}>
          <BackArrow />
        </button>
      </li>
    </ul>
  {/if}
</nav>