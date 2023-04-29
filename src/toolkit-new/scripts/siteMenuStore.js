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
      current: 0,
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
    currentNav: navLevel => storeUpdate(
      "navigation", 
      {...get(siteMenu).navigation, current: navLevel}, 
    siteMenu.update),
    expandNav(navLevel) {
      const copy = get(siteMenu);
      copy.navigation.open.push(navLevel);
      storeUpdate("navigation", copy.navigation, siteMenu.update);     
    },
    collapseNav(navLevelName, navLevelNum) {
      const copy = get(siteMenu);
      copy.navigation.open = copy.navigation.open.filter((value,index) => index < navLevelNum);
      copy.navigation.open.push(navLevelName);
      storeUpdate("navigation", copy.navigation, siteMenu.update);
    },
  }
};

const siteMenuStore = createSiteMenuStore();

export default siteMenuStore;