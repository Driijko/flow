import { writable, get } from "svelte/store";
import siteSettings from "./siteSettings";
import storeUpdate from "./utils/storeUpdate";

function createCurrentPageStore() {
  // const {subscribe, update} = writable({
  //   name: siteSettings.startingPageName,
  //   exit: {
  //     exitMethod: null,
  //     duration: 0,
  //   }
  // });
  const currentPage = writable({
    name: siteSettings.startingPageName,
    exit: {
      exitMethod: null,
      duration: 0,
    },
  })

  return {
    ...currentPage,
    exit: (duration, exitMethod) => {
      storeUpdate("exit", {
        exitMethod: exitMethod,
        duration: duration,
      },currentPage.update)
    },
    newPage: newPageName => {
      if (get(currentPage).exit.exitMethod) {
        get(currentPage).exit.exitMethod();
      }
      const timerId = setTimeout(()=> {
        storeUpdate("name",newPageName,currentPage.update);
        clearTimeout(timerId);
      },get(currentPage).exit.duration);
    }
  }

  // return {
  //   subscribe,
  //   exit: (duration, exitMethod) => {
  //     storeUpdate("exit", {
  //       exitMethod: exitMethod,
  //       duration: duration,
  //     },update);
  //   },
  //   newPage: newPageName => update(prev => {
  //     if (prev.exit.exitMethod) {
  //       prev.exit.exitMethod();
  //     }
  //     const timerId = setTimeout(()=> {

  //       clearTimeout(timerId);
  //     },prev.exit.duration);
  //   }),
  // }
};

const currentPageStore = createCurrentPageStore();

export default currentPageStore;