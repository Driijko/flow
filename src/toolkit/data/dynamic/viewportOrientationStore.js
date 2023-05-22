import { writable } from "svelte/store";

function checkOrientation() {
  if (window.innerWidth <= window.innerHeight) {
    return "portrait";
  } else {
    return "landscape";
  }
}

export const viewportOrientation = writable(checkOrientation());

export function updateViewportOrientation() {
  viewportOrientation.set(checkOrientation());
};