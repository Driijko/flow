import viewportCSS from "./viewport/viewportCSS";
import resize from "./viewport/resize";

export default function setUp() {
  viewportCSS();
  resize();
}