<!-- SCRIPTS ////////////////////////////////// -->
<script>
  import SiteMenuContent from "./SiteMenuContent.svelte";
  import { siteMenuModal } from "../../../scripts/modalsStore";
</script>

<!-- MARKUP /////////////////////////////////////// -->
<div id="this" class:background-color={$siteMenuModal}>
  <SiteMenuContent />
</div>

<!-- STYLE //////////////////////////////////////// -->
<style>
@media screen and (orientation: portrait) {
#this {
  width: 100%;
  height: 100%;
}
#this.background-color {
  background-color: black;
}
/* INTERFACE TRAY ------------------------------ */
#this :global(.interface-tray) {
  height: 8%;
  background-color: black;
  justify-content: center;
  transition-property: left, width;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;
  gap: 8%;
}
#this :global(.interface-tray.closed) {
  width: 100%;
  top: 92%;
  left: 0%;
  transition-property: left, width;
  transition-duration: 0.5s;
  transition-timing-function: ease-out;
}
#this :global(.interface-tray li) {
  min-width: calc(var(--uarr1-width)/8);
  height: 100%;
}
#this :global(.interface-tray button) {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#this :global(.interface-tray svg) {
  width: calc(var(--uarr1-width)/12);
  height: calc(var(--uarr1-width)/12);
}
#this :global(.interface-tray.open) {
  width: 15%;
  left: 85%;
  top: 92%;
  transition-property: left, width;
  transition-duration: 1s;
  transition-timing-function: ease-out;
}
#this :global(.interface-tray.splash) {
  transition-property: top;
  transition-duration: 0.89s;
  transition-timing-function: ease-out;
}
/* INTERFACE TRAY SPLASH -------------------- */
#this :global(.interface-tray.closed.splash) {
  top: 300%;
}

/* HEADER ------------------------------------------ */
#this :global(header) {
  border: 1px solid black;
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: calc(var(--uarr-width)/50);
  padding-left: 1%;
}
#this :global(h1) {
  font-size: calc(var(--uarr-width)/14);
}
#this :global(h2) {
  font-size: calc(var(--uarr-width)/24);
}
/* BREADCRUMBS ---------------------------------- */
#this :global(.site-menu-breadcrumbs) {
  padding-left: 1%;
  background-color: hsl(0, 0%, 20%);
  color: white;
  height: 3.2%;
  font-size: calc(var(--uarr-width)/19.3);
  display: flex;
  overflow-x: scroll;
  scrollbar-width: 0;
}
#this :global(.site-menu-breadcrumbs li) {
  white-space: nowrap;
  padding-right: calc(var(--uarr-width)/60);
}
/* TAB CONTENT ------------------------------------ */
#this :global(.tab-content) {
  height: 78.8%;
}
/* NAV ---------------- */
#this :global(nav), #this :global(.site-settings) {
  height: 100%;
  border: calc(var(--uarr-width)/100) solid black;
  background-color: hsl(0, 0%, 80%);
  border-bottom: none;
}
#this :global(nav ul) {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: calc(var(--uarr-width)/13);
  gap: 10%;
}
#this :global(nav li) {
  text-align: center;
  line-height: 1.3;
}
#this :global(nav a) {
  width: 100%;
}
#this :global(nav li.selected) {
  font-size: calc(var(--uarr-width)/10);
}
/* SETTINGS ---------------- */
#this :global(.site-settings) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: calc(var(--uarr-width)/10);
}
#this :global(.site-settings-option) {
  border-top: calc(var(--uarr-width)/30) solid black;
  border-bottom: calc(var(--uarr-width)/30) solid black;
  font-size: calc(var(--uarr-width)/12);
  background-color: hsl(0, 0%, 90%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20%;
  padding: 3%;
}
#this :global(.site-settings input[type="checkbox"]) {
  border: calc(var(--uarr-width)/50) solid black;
  width: calc(var(--uarr-width)/7);
  height: calc(var(--uarr-width)/7);
}
#this :global(.site-settings .volume-adjust) {
  border-top: calc(var(--uarr-width)/50) solid black;
  border-bottom: calc(var(--uarr-width)/50) solid black;
  background-color: hsl(0, 0%, 90%);
  height: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: calc(var(--uarr-width)/20);
  padding-top: calc(var(--uarr-width)/100);
  font-size: calc(var(--uarr-width)/17);
}
#this :global(input[type="range"]) {
  width: 70%;
}
#this :global(input[type="range"]::-webkit-slider-runnable-track) {
  height: calc(var(--uarr-width)/20);
  border-radius: calc(var(--uarr-width)/10);
  border-width: calc(var(--uarr-width)/100);
}
#this :global(input[type="range"]::-webkit-slider-thumb) {
  margin-top: -4.5%; 
  border-width: calc(var(--uarr-width)/100);
  border-radius: calc(var(--uarr-width)/10);
  height: calc(var(--uarr-width)/12);
  width: calc(var(--uarr-width)/12);    
}
#this :global(input[type="range"]::-moz-range-track) {
  height: calc(var(--uarr-width)/30);
  border-radius: calc(var(--uarr-width)/10);
  border-width: calc(var(--uarr-width)/100);
}
#this :global(input[type="range"]::-moz-range-thumb) {
  margin-top: -4.5%; 
  border-width: calc(var(--uarr-width)/100);
  border-radius: calc(var(--uarr-width)/10);
  height: calc(var(--uarr-width)/15);
  width: calc(var(--uarr-width)/15);   
}
/* TAB BUTTONS ------------------------------------ */
#this :global(.site-menu-modal-tab-buttons) {
  display: flex;
  gap: calc(var(--uarr-width)/10);
  position: absolute;
  top: 92%;
  height: 8%;
  width: 85%;
  border-top: calc(var(--uarr-width)/100) solid black;
}
#this :global(.site-menu-modal-tab-buttons li) {
  width: 20%;
  height: 100%;
  padding-bottom: 2%;
}
#this :global(.site-menu-modal-tab-buttons button) {
  padding-bottom: 5%;
  min-height: 0;
}
#this :global(.site-menu-modal-tab-buttons svg) {
  width: 40%;
}
}

/* Tab Button Label Hover Transitions */
@media screen and (orientation: portrait) and (hover:hover) {
  #this :global(.site-menu-modal-tab-buttons input:not(:checked) + label:hover) {
    transform: scale(1.4, 1.1) translateY(calc(var(--uarr-width)/200));
  }
}

/* H2 Responsive */
@media screen and (orientation: portrait) and (max-width: 380px) {
  #this :global(h2) {
    display: none;
  }
}
</style>