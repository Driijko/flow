<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import { fly } from "svelte/transition";
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
    <ul in:fly="{{x:400,duration:500,delay:500}}" 
      out:fly="{{x:-400,duration:500}}" 
    >
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
    <ul in:fly="{{x:400,duration:500,delay:500}}" 
      out:fly="{{x:-400,duration:500}}"
    >
      <li>
        <a href="light-ambient" on:click|preventDefault={()=> handleClick("light-ambient")}>
          LIGHT<br class="portrait"/> AMBIENT MUSIC
        </a>
      </li>
      <li>
        <a href="dark-ambient" on:click|preventDefault={()=> handleClick("dark-ambient")}>
          DARK<br class="portrait"/> AMBIENT MUSIC
        </a>
      </li>
      <li>
        <button aria-label="back" class="nav-back-button" type="button" on:click={()=> updateNavLevel("")}>
          <BackArrow />
        </button>
      </li>
    </ul>
  {/if}
</nav>

<!-- STYLES /////////////////////////////// -->
<style>
@media (hover:hover) {
a, button {
  transition-property: transform, background-color, color;
  transition-duration: 1s;
  transition-timing-function: ease-out;
}
a:hover, button:hover {
  transform: scale(1.1);
  background-color: black;
  color: white;
}
button:hover :global(path) {
  fill: white;
}
}
</style>