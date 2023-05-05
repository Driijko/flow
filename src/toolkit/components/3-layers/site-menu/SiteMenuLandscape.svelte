<!-- SCRIPTS //////////////////////////////////////////// -->
<script>
  import SiteMenuContent from "./SiteMenuContent.svelte";
  import { siteMenuModal } from "../../../scripts/modalsStore";
</script>

<!-- MARKUP ///////////////////////////////////////////// -->
<div id="this" class:background={$siteMenuModal}>
  <SiteMenuContent />
</div>

<!-- STYLE //////////////////////////////////////// -->
<style>
@media screen and (orientation: landscape) {
#this {
  width: 100%;
  height: 100%;
}
#this.background {
  background-color: black;
}
/* INTERFACE TRAY ------------------------- */
#this :global(.interface-tray) {
  right: 0%;
  gap: calc(var(--uarr2-width)/100);
  top: 0%;
}
#this :global(.interface-tray.closed li) {
  width: calc(var(--uarr2-width)/20);
  height: calc(var(--uarr2-width)/22);
  padding: calc(var(--uarr2-width)/80);
  padding-top: calc(var(--uarr2-width)/100);
}
#this :global(.interface-tray.open li) {
  width: calc(var(--uarr2-width)/18);
  height: calc(var(--uarr2-width)/18);
  padding: calc(var(--uarr2-width)/80);
}
#this :global(.interface-tray svg) {
  width: 100%;
}
#this :global(.interface-tray.splash) {
  transition-property: top;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;
}
#this :global(.interface-tray.splash.closed) {
  top: -100%;
}
/* HEADER ------------------------------------------ */
#this :global(header) {
  height: 10%;
  display: flex;
  align-items: center;
  gap: calc(var(--uarr-width)/30);
  padding-left: 1%;
}
#this :global(h1) {
  font-size: calc(var(--uarr-width)/30);
}
#this :global(h2) {
  font-size: calc(var(--uarr-width)/60);
}
/* BREADCRUMBS -------------------------------- */
#this :global(.site-menu-breadcrumbs) {
  display: flex;
  padding-left: 0.5%;
  align-items: center;
  height: 3%;
  font-size: calc(var(--uarr-width)/80);
  letter-spacing: calc(var(--uarr-width)/1000);
}
#this :global(.site-menu-breadcrumbs li) {
  padding-right: calc(var(--uarr-width)/200);
}
/* TAB CONTENT ------------------------------------ */
#this :global(.tab-content) {
  height: 77%;
}
#this :global(nav), #this :global(.site-settings) {
  height: 100%;
  border-top: calc(var(--uarr-width)/200) solid black;
  border-left: calc(var(--uarr-width)/200) solid black;
  border-right: calc(var(--uarr-width)/200) solid black;
  background-color: hsl(0, 0%, 80%);
  border-bottom: none;
}
/* NAV ------------------- */
#this :global(nav ul) {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: calc(var(--uarr-width)/30);
  gap: 10%;
}
#this :global(nav li) {
  text-align: center;
  line-height: 1.3;
  width: 100%;
  word-spacing: calc(var(--uarr-width)/100);
}
#this :global(nav a) {
  width: 100%;
}
#this :global(nav li.selected) {
  font-size: calc(var(--uarr-width)/25);
}
/* SETTINGS ---------------- */
#this :global(.site-settings) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: calc(var(--uarr-width)/100);
}
#this :global(.site-settings-option) {
  border-top: calc(var(--uarr-width)/200) solid black;
  border-bottom: calc(var(--uarr-width)/200) solid black;
  font-size: calc(var(--uarr-width)/40);
  background-color: hsl(0, 0%, 90%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 18%;
  padding: 3% 35%;
}
#this :global(.site-settings input[type="checkbox"]) {
  border: calc(var(--uarr-width)/200) solid black;
  width: calc(var(--uarr-width)/20);
  height: calc(var(--uarr-width)/20);
}
#this :global(.site-settings .volume-adjust) {
  border-top: calc(var(--uarr-width)/200) solid black;
  border-bottom: calc(var(--uarr-width)/200) solid black;
  background-color: hsl(0, 0%, 90%);
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: calc(var(--uarr-width)/20);
  font-size: calc(var(--uarr-width)/50);
}
#this :global(input[type="range"]) {
  width: 25%;
}
#this :global(input[type="range"]::-webkit-slider-runnable-track) {
  height: calc(var(--uarr-width)/50);
  border-radius: calc(var(--uarr-width)/10);
  border-width: calc(var(--uarr-width)/200);
}
#this :global(input[type="range"]::-webkit-slider-thumb) {
  border-width: calc(var(--uarr-width)/200);
  border-radius: calc(var(--uarr-width)/10);
  height: calc(var(--uarr-width)/30);
  width: calc(var(--uarr-width)/30);    
}
#this :global(input[type="range"]::-moz-range-track) {
  height: calc(var(--uarr-width)/80);
  border-radius: calc(var(--uarr-width)/10);
  border-width: calc(var(--uarr-width)/200);
}
#this :global(input[type="range"]::-moz-range-thumb) {
  border-width: calc(var(--uarr-width)/200);
  border-radius: calc(var(--uarr-width)/10);
  height: calc(var(--uarr-width)/40);
  width: calc(var(--uarr-width)/40);   
}
/* TAB BUTTONS ------------------------------------ */
#this :global(.site-menu-modal-tab-buttons) {
  display: flex;
  justify-content: center;
  gap: calc(var(--uarr-width)/10);
  position: absolute;
  top: 90%;
  height: 10.2%;
  width: 100.1%;
  border-top: calc(var(--uarr-width)/200) solid black;
}
#this :global(.site-menu-modal-tab-buttons li) {
  width: 20%;
  height: 100%;
  padding-bottom: 1%;
}
#this :global(.site-menu-modal-tab-buttons button) {
  padding-bottom: 3%;
  padding-top: 2%;
}
#this :global(.site-menu-modal-tab-buttons svg) {
  width: 30%;
}
}

/* Tab Button Label Hover Transitions */
@media screen and (orientation: landscape) and (hover:hover) {
  #this :global(.site-menu-modal-tab-buttons input:not(:checked) + label:hover) {
    transform: scale(1.3, 1.1) translateY(calc(var(--uarr-width)/460));
  }
}
</style>