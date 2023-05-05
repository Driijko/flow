import { writable } from "svelte/store";
import siteSettings from "../data/siteSettings";

// STATE ----------------------------------------
export const currentPage = writable(siteSettings.startingPageName);
const currentPageExit = {
  exitMethod: ()=> null,
  duration: 0,
};

// FUNCTIONS -----------------------------------
export function newPage(pageName) {
  currentPageExit.exitMethod();
  const timerId = setTimeout(()=> {
    currentPage.set(pageName);
    clearTimeout(timerId);
  },currentPageExit.duration);
};

export function setPageExit(exitMethod, duration) {
  currentPageExit.exitMethod = exitMethod;
  currentPageExit.duration = duration;
};