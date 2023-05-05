import siteSettings from "../../data/siteSettings";
import viewportCSS from "./viewportCSS";
import resizeStore from "./resizeStore";
import viewportOrientationStore from "./viewportOrientationStore";
import { setNotification } from "../notifyStore";

export default function resize() {
  let resizeReady = false;
  window.addEventListener("resize", ()=> {
    if (resizeReady === false) {
      resizeReady = true;
      setNotification("resize", siteSettings.resizeDelay);
      const timerId = setTimeout(()=> {
        viewportCSS();
        resizeStore.updateResizeCount();
        viewportOrientationStore.update();
        resizeReady = false;
        clearTimeout(timerId);
      }, siteSettings.resizeDelay);
    };
  });
};