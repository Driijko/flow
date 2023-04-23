import { writable } from "svelte/store";
import storeUpdate from "./utils/storeUpdate";

function createModalsStore() {

  const modals = writable({
    siteMenu: false,
  });

  return {
    ...modals,
    open: modal => storeUpdate("modal",true,modals.update),
    close: modal => storeUpdate("modal",false,modals.update),
  }
};

const modalsStore = createModalsStore();

export default modalsStore;