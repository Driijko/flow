import siteSettings from "../static/siteSettings";
import { writable } from "svelte/store";

function determineBreakpoint() {
  if (window.innerWidth <= window.innerHeight) {
    return "mobile";
  } else {
    if ((window.innerWidth - siteSettings.maxLandscape[0]) 
      >= siteSettings.minInterfaceAreaWidth) {
        return "large-desktop";
      } else {
        return "small-desktop";
      };
  };
};

export const layoutBreakpoint = writable(determineBreakpoint());

export function updateLayoutBreakpoint() {
  layoutBreakpoint.set(determineBreakpoint());
};