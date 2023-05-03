import { writable } from "svelte/store";

// RESET COUNT ------------------------------------------
function createResizeStore() {
  const {subscribe, update} = writable(0);

  return {
    subscribe,
    updateResizeCount: ()=> update(n => n + 1),
  }
}

const resizeStore = createResizeStore();

export default resizeStore;