<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import { flip } from "svelte/animate";
  import shift from "../../../scripts/transitions/shift";
  import { quintOut, quintIn, linear, sineOut } from "svelte/easing";
  import viewportOrientationStore
  from "../../../scripts/viewport/viewportOrientationStore";
  import { modals } from "../../../scripts/modalsStore";
  import { currentPage } from "../../../scripts/currentPageStore";
  import { siteMenuModal, playlistModal } from "../../../scripts/modalsStore";
  import GearIcon from "../../6-elements/icons/menu/GearIcon.svelte";
  import CompassIcon from "../../6-elements/icons/menu/CompassIcon.svelte";
  import PlaylistModalOpenerButton 
  from "../../6-elements/interface/modals/PlaylistModalOpenerButton.svelte";
  import SiteMenuModalButton 
  from "../../6-elements/interface/modals/SiteMenuModalButton.svelte";

  // TRANSITIONS BASED ON VIEWPORT ----------------------
  const inTrans = {easing: quintOut, duration: 1000};
  const outTrans = {easing: quintIn, duration: 1000};

  if ($viewportOrientationStore === "portrait") {
    inTrans.x = -window.innerWidth;
    outTrans.x = -window.innerWidth;
  } else {
    inTrans.y = -400;
    outTrans.y = -400;
  };

  // DATA ----------------------------------
  const menuItem = {id: 0, component: SiteMenuModalButton, delay:0}
  const playlistItem = {id: 1, component: PlaylistModalOpenerButton, delay: 0}; 
  let list = [menuItem];
  let storage = [];

  // REACTIVE --------------------------------
  $: if ($playlistModal && list.length > 1) {
    list = [list[0]];
  } else if ($playlistModal === false) {
    list = [list[0], playlistItem];
  };

  $: if ($siteMenuModal && list.length > 1) {
    storage = list.slice(1, list.length);
    list = [list[0]];
  } else if (storage.length > 0) {
    list = [list[0], ...storage];
    storage = [];
  };
</script>

<!-- MARKUP /////////////////////////////////////// -->
<button type="button" on:click={()=> list = [list[0], playlistItem]}>Test</button>

<ul class="interface-tray"
  class:splash={$currentPage === "splash"}
  class:closed={$siteMenuModal === false}
  class:open={$siteMenuModal}
>
  {#each list as listItem (listItem.id)}
    <li animate:flip="{{duration:700, delay:300, easing: sineOut}}"
      in:shift="{{...inTrans, delay: listItem.delay}}"
      out:shift="{outTrans}"
    >
      <svelte:component this={listItem.component} />
    </li>
  {/each}

  <!-- <li animate:flip="{{duration:200}}">
    <GearIcon />
  </li>
  {#if $playlistModal === false}
  <li>
    <PlaylistModalOpenerButton />
  </li>
  {/if} -->
</ul>

<!-- STYLES //////////////////////////////////////// -->
<style>
button {
  position: absolute;
  background-color: black;
  color: white;
  pointer-events: initial;
} 
#test2 {
  top: 10%;
}
#test3 {
  top: 20%;
}
#test4 {
  top: 30%;
}
#test5 {
  top: 40%;
}
#test6 {
  top: 50%;
}
ul {
  display: flex;
  flex-flow: row-reverse;
}
li {

  background-color: black;
}
ul :global(svg) {
  fill: white;
}
</style>