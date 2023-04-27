import { writable, get } from "svelte/store";
import storeUpdate from "./utils/storeUpdate";

function createSiteMenuStore() {

  const siteMenu = writable({
    tab: "navigation",
    nav: {
      open: [],
      current: "navigation",
    }
  });

  return {
    ...siteMenu,
    tab: tabName => storeUpdate("tab",tabName,siteMenu.update),
    currentNav: navLevel => storeUpdate("nav", {...get(siteMenu).nav, current: navLevel}, siteMenu.update),
    expandNav(navLevel) {
      const data = get(siteMenu);
      data.nav.open.push(navLevel);
      storeUpdate("nav", {
        open: data.nav.open,
        current: data.nav.current,
      },siteMenu.update);     
    },
    collapseNav(navLevelName, navLevelNum) {
      const data = get(siteMenu);
      data.nav.open = data.nav.open.filter((value,index) => index < navLevelNum);
      data.nav.open.push(navLevelName);
      storeUpdate("nav", {
        open: data.nav.open,
        current: data.nav.current,
      },siteMenu.update);
    },
  }
};

const siteMenuStore = createSiteMenuStore();

export default siteMenuStore;