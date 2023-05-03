import { writable } from "svelte/store";

function checkOrientation() {
  if (window.innerWidth <= window.innerHeight) {
    return "portrait";
  } else {
    return "landscape";
  }
}

function createViewportOrientationStore() {
  const {subscribe, set} = writable(checkOrientation());

  return {
    subscribe,
    update: ()=> set(checkOrientation()),
  }
}

const viewportOrientationStore = createViewportOrientationStore();

export default viewportOrientationStore;