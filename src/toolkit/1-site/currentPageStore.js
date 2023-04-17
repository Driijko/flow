import { writable } from "svelte/store";
import siteSettings from "./siteSettings";
import storeUpdate from "../0-helpers/storeUpdate";

function createCurrentPageStore() {
  const {subscribe, update, set} = writable({
    name: siteSettings.startingPageName,
  });

  return {
    subscribe,
    newPage: (newPageName, exitDuration) => {
      const timerId = setTimeout(()=> {
        storeUpdate("name", newPageName, update);
        clearTimeout(timerId);
      }, exitDuration);
    }
  }
}