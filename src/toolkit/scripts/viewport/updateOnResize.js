import viewportCSS from "./viewportCSS";
import { updateViewportOrientation } from "../../data/dynamic/viewportOrientationStore";

export default function updateOnResize() {
  window.addEventListener("resize", ()=> {
    viewportCSS();
    updateViewportOrientation();
  });
};