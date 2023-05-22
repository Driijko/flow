import viewportCSS from "./viewportCSS";
import { updateViewportOrientation } 
from "../../data/dynamic/viewportOrientationStore";
import { updateLayoutBreakpoint } 
from "../../data/dynamic/layoutBreakpointStore";

export default function updateOnResize() {
  window.addEventListener("resize", ()=> {
    viewportCSS();
    updateViewportOrientation();
    updateLayoutBreakpoint();
  });
};