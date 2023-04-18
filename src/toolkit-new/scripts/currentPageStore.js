import { writable } from "svelte/store";
import siteSettings from "./siteSettings";
import storeUpdate from "./utils/storeUpdate";

function createCurrentPageStore() {
  const {subscribe, update} = writable({
    name: siteSettings.startingPageName,
  });

  return {
    subscribe,
    newPage: (newPageName, exitDuration, currentPageExit) => {
      if (currentPageExit) {
        currentPageExit();
      }
      const timerId = setTimeout(()=> {
        storeUpdate("name", newPageName, update);
        clearTimeout(timerId);
      }, exitDuration);
    }
  }
};

const currentPageStore = createCurrentPageStore();

export default currentPageStore;