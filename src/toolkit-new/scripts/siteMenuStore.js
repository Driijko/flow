import { writable, get } from "svelte/store";

// STATE ---------------------------------------
export const siteMenuTab = writable({current: "navigation", prev: "navigation"});
export const navigationLevels = writable([]);
export const navigationCurrentLevel = writable(0);

// MAP -----------------------------------------
export const tabPosition = {
  navigation: 0,
  settings: 1,
}

// FUNCTIONS ---------------------------------
export function newTab(tabName) {
  siteMenuTab.set({current: tabName, prev: get(siteMenuTab).current});
};
export function navigationExpand(levelName) {
  const copy = get(navigationLevels);
  copy.push(levelName);
  navigationLevels.set(copy);
};
export function navigationCollapse(levelName, levelNum) {
  const copy = get(navigationLevels).filter((value, index) => index < levelNum);
  navigationLevels.set(copy);
  navigationExpand(levelName);
};
export function setCurrentNavigationLevel(levelNum) {
  navigationCurrentLevel.set(levelNum);
};