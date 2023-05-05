<!-- SCRIPTS /////////////////////////////////////////// -->
<script>
  // IMPORTS ---------------------------------
  import { toggleAnimations, animationsOff } 
  from "../../../../scripts/animationsStore";
  import { setNotification } from "../../../../scripts/notifyStore";
  import PaletteIcon from "../../icons/PaletteIcon.svelte";

  // EVENT HANDLERS --------------------------------
  function handleClick() {
    toggleAnimations();
    if ($animationsOff) {
      setNotification("animations", 1500);
    } else {
      setNotification("animations", 3000);
    };
  };
  
</script>

<!-- MARKUP ////////////////////////////////////////////// -->
<button type="button" on:click={handleClick}
  class:on={$animationsOff === false}
  class:off={$animationsOff}
>
  <PaletteIcon />
</button>

<!-- STYLES ////////////////////////////////////////// -->
<style>
  button {
    width: 100px;
    height: 100px;
    background-color: black;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  button :global(svg) {
    width: 80%;
  }
  button.on :global(svg) {
    width: 80%;
    fill: white;
  }
  button.off :global(svg) {
    fill: grey;
  }
</style>