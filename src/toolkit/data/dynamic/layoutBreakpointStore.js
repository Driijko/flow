import { layout } from "../static/siteSettings";
import { writable } from "svelte/store";

const { maxLandscapeWidth, minInterfaceAreaWidth } = layout;

function determineBreakpoint() {
  if (window.innerWidth <= window.innerHeight) {
    return "mobile";
  } else {
    if ((window.innerWidth - maxLandscapeWidth) >= minInterfaceAreaWidth) {
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