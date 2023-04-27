import { writable, get } from "svelte/store";
import storeUpdate from "./utils/storeUpdate";

function createSiteMenuStore() {

  const siteMenu = writable({
    tab: "navigation",
    navigation: {
      open: [],
      current: "navigation",
    }
  });

  return {
    ...siteMenu,
    tab: tabName => storeUpdate("tab",tabName,siteMenu.update),
    currentNav: navLevel => storeUpdate("navigation", {...get(siteMenu).navigation, current: navLevel}, siteMenu.update),
    expandNav(navLevel) {
      const data = get(siteMenu);
      data.navigation.open.push(navLevel);
      storeUpdate("navigation", {
        open: data.navigation.open,
        current: data.navigation.current,
      },siteMenu.update);     
    },
    collapseNav(navLevelName, navLevelNum) {
      const data = get(siteMenu);
      data.navigation.open = data.navigation.open.filter((value,index) => index < navLevelNum);
      data.navigation.open.push(navLevelName);
      storeUpdate("navigation", {
        open: data.navigation.open,
        current: data.navigation.current,
      },siteMenu.update);
    },
  }
};

const siteMenuStore = createSiteMenuStore();

export default siteMenuStore;