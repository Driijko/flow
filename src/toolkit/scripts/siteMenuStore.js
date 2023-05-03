import { writable, get } from "svelte/store";

// STATE ---------------------------------------
export const siteMenuTab = writable({current: "navigation", prev: "settings"});
export const navigationLevels = writable([]);
export const navigationCurrentLevel = writable(0);
export const settingsLevels = writable([]);
export const settingsCurrentLevel = writable(0);

// MAP -----------------------------------------
const map = {
  navigation: {
    levels: navigationLevels,
    currentLevel: navigationCurrentLevel,
    tabPosition: 0,
  },
  settings: {
    levels: settingsLevels,
    currentLevel: settingsCurrentLevel,
    tabPosition: 1,
  },
};

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
export function getSiteMenuData(tabName,tabProperty) {
  return map[tabName][tabProperty];
};