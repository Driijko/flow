import viewportCSS from "./viewportCSS";

export default function updateOnResize() {
  window.addEventListener("resize", ()=> {
    viewportCSS();
  });
};