<!-- SCRIPTS ////////////////////////////////////////////// -->
<script>
  // IMPORTS ------------------------------------------
  import currentPageStore from "../../scripts/currentPageStore";
  import modalsStore from "../../scripts/modalsStore";

  // EVENT HANDLERS -----------------------------------
  function handleClick(page) {
    modalsStore.close("siteMenu");
    currentPageStore.newPage(page);
  }
</script>

<nav>
  <ul>
    <li>
      <a href="home" on:click|preventDefault={()=> handleClick("home")}>
        Home
      </a>
    </li>
    <li>
      <a href="shop" on:click|preventDefault={()=> handleClick("shop")}>
        Shop
      </a>
    </li>
    <li>
      <a href="about" on:click|preventDefault={()=> handleClick("about")}>
        About
      </a>
    </li>
    <li>
      <a href="contact" on:click|preventDefault={()=> handleClick("contact")}>
        Contact
      </a>
    </li>
  </ul>
</nav>

<!-- STYLES /////////////////////////////// -->
<style>
@media (hover:hover) {
a {
  transition-property: transform, background-color, color;
  transition-duration: 1s;
  transition-timing-function: ease-out;
}
a:hover {
  transform: scale(1.1);
  background-color: black;
  color: white;
}
}
</style>