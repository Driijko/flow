// import { writable, get } from "svelte/store";
// import siteSettings from "./siteSettings";
// import storeUpdate from "./utils/storeUpdate";

// function createCurrentPageStore() {

//   const currentPage = writable({
//     name: siteSettings.startingPageName,
//     exit: {
//       exitMethod: null,
//       duration: 0,
//     },
//   })

//   return {
//     ...currentPage,
//     exit: (duration, exitMethod) => {
//       storeUpdate("exit", {
//         exitMethod: exitMethod,
//         duration: duration,
//       },currentPage.update)
//     },
//     newPage: newPageName => {
//       if (get(currentPage).exit.exitMethod) {
//         get(currentPage).exit.exitMethod();
//       }
//       const timerId = setTimeout(()=> {
//         storeUpdate("name",newPageName,currentPage.update);
//         clearTimeout(timerId);
//       },get(currentPage).exit.duration);
//     }
//   }
// };

// const currentPageStore = createCurrentPageStore();

// export default currentPageStore;

import { writable } from "svelte/store";
import siteSettings from "./siteSettings";

// STATE ----------------------------------------
export const currentPage = writable(siteSettings.startingPageName);
const currentPageExit = {
  exitMethod: ()=> null,
  duration: 0,
};

// FUNCTIONS -----------------------------------
export function newPage(pageName) {
  currentPageExit.exitMethod();
  const timerId = setTimeout(()=> {
    currentPage.set(pageName);
    clearTimeout(timerId);
  },currentPageExit.duration);
};
export function setPageExit(exitMethod, duration) {
  currentPageExit.exitMethod = exitMethod;
  currentPageExit.duration = duration;
};