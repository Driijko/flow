import { writable } from "svelte/store";
import { startingPageName } from "../static/siteSettings";

// STATE ----------------------------------------
export const currentPage = writable(startingPageName);
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