import { writable } from "svelte/store";
import siteSettings from "../static/siteSettings";

// STATE ----------------------------------------
export const currentPageName = writable(siteSettings.startingPageName);
export const currentPageLayout = writable("layout1");
const currentPageExit = {
  exitMethod: ()=> null,
  duration: 0,
};

// MAP: name to layout -----------------------------
const map = {
  loading: "layout1",
};

// FUNCTIONS -----------------------------------
export function newPage(pageName) {
  currentPageExit.exitMethod();
  const timerId = setTimeout(()=> {
    currentPageName.set(pageName);
    currentPageLayout.set(map[pageName]);
    clearTimeout(timerId);
  },currentPageExit.duration);
};

export function setPageExit(exitMethod, duration) {
  currentPageExit.exitMethod = exitMethod;
  currentPageExit.duration = duration;
};