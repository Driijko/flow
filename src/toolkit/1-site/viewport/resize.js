import siteSettings from "../siteSettings";
import viewportCSS from "./viewportCSS";

export default function resize() {
  let resizeReady = false;
  window.addEventListener("resize", ()=> {
    if (resizeReady === false) {
      resizeReady = true;
      const timerId = setTimeout(()=> {
        viewportCSS();
        // resetCount.updateResetCount();
        clearTimeout(timerId);
        resizeReady = false;
      }, siteSettings.resizeDelay);
    };
  });
};