<!-- SCRIPTS /////////////////////////////////////// -->
<script>
  // IMPORTS --------------------------------------
  import { flip } from "svelte/animate";
  import shift from "../../../scripts/transitions/shift";
  import { quintOut, quintIn, sineOut } from "svelte/easing";
  import viewportOrientationStore
  from "../../../scripts/viewport/viewportOrientationStore";
  import { currentPage } from "../../../scripts/currentPageStore";
  import { siteMenuModal, playlistModal } from "../../../scripts/modalsStore";
  import PlaylistModalOpenerButton 
  from "../../6-elements/interface/modals/PlaylistModalOpenerButton.svelte";
  import SiteMenuModalButton 
  from "../../6-elements/interface/modals/SiteMenuModalButton.svelte";
  import AnimationsButton 
  from "../../6-elements/interface/modals/AnimationsButton.svelte";

  // TRANSITIONS BASED ON VIEWPORT ----------------------
  const inTrans = {easing: quintOut, duration: 1000};
  const outTrans = {easing: quintIn, duration: 500};

  if ($viewportOrientationStore === "portrait") {
    inTrans.x = -window.innerWidth;
    outTrans.x = -window.innerWidth;
  } else {
    inTrans.y = -400;
    outTrans.y = -400;
  };

  // DATA ----------------------------------
  const menuItem = {id: 0, component: SiteMenuModalButton, delay:0}
  const playlistItem = {id: 2, component: PlaylistModalOpenerButton, delay: 0};
  const animationsItem = {id: 1, component: AnimationsButton, delay: 0}; 
  let list = [menuItem];
  let storage = [];

  // REACTIVE --------------------------------
  $: if ($currentPage === "music") {
    list[1] = animationsItem;
  } else {
    list = [list[0]];
  }
  // Remove/add playlist button if playlist modal is open/closed.
  $: if ($playlistModal && list.length > 2) {
    list = [list[0], list[1]];
  } else if ($playlistModal === false) {
    list[2] = playlistItem;
  };



  // Empty/fill tray of all items except site menu if site menu modal 
  // is open/closed.
  $: if ($siteMenuModal && list.length > 1) {
    storage = list.slice(1, list.length);
    list = [list[0]];
  } else if (storage.length > 0) {
    list = [list[0], ...storage];
    storage = [];
  };
</script>

<!-- MARKUP /////////////////////////////////////// -->
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
</ul>

<!-- STYLES //////////////////////////////////////// -->
<style>
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