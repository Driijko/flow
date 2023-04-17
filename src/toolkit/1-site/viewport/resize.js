import siteSettings from "../siteSettings";
import viewportCSS from "./viewportCSS";
import resizeStore from "./resizeStore";

export default function resize() {
  let resizeReady = false;
  window.addEventListener("resize", ()=> {
    if (resizeReady === false) {
      resizeReady = true;
      const timerId = setTimeout(()=> {
        viewportCSS();
        resizeStore.updateResizeCount();
        clearTimeout(timerId);
        resizeReady = false;
      }, siteSettings.resizeDelay);
    };
  });
};