import { writable, get } from "svelte/store";
import storeUpdate from "./utils/storeUpdate";

function createSiteMenuStore() {

  const siteMenu = writable({
    tab: {
      current: "navigation",
      prev: "navigation",
    },
    navigation: {
      open: [],
      current: "navigation",
      tabPosition: 0,
    },
    settings: {
      open: [],
      current: "settings",
      tabPosition: 1,
    }
  });

  return {
    ...siteMenu,
    tab(tabName) {
      storeUpdate("tab", {
        current: tabName, 
        prev: get(siteMenu).tab.current}
      , siteMenu.update);
    },
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
      // data.navigation.open = data.navigation.open.splice(0,navLevelNum);
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