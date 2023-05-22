import siteSettings from "../static/siteSettings";
import { writable } from "svelte/store";

function determineBreakpoint() {
  if (window.innerWidth <= window.innerHeight) {
    return "mobile";
  } else {
    if ((window.innerWidth - siteSettings.maxLandscapeWidth) 
      >= siteSettings.minPortraitWidth) {
        return "4K";
      } else {
        return "HD";
      };
  };
};

export const layoutBreakpoint = writable(determineBreakpoint());

export function updateLayoutBreakpoint() {
  layoutBreakpoint.set(determineBreakpoint());
};