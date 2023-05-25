import { writable } from "svelte/store";

// STATE -------------------------------------
export const navigationLevels = writable([]);
export const navigationCurrentLevel = writable(0);

// FUNCTIONS ---------------------------------
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