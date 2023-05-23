import viewportCSS from "./viewport/viewportCSS";
import { updateLayoutBreakpoint } from "../data/dynamic/layoutBreakpointStore";
import updateOnResize from "./viewport/updateOnResize";

export default function setUp() {
  viewportCSS();
  updateLayoutBreakpoint();
  updateOnResize();
};