import siteSettings from "../../data/static/siteSettings";
import calcUARR from "../utils/calcUARR";

export default function viewportCSS() {

  // PORTRAIT UARR ---------------------
  const portraitUARR = calcUARR(
    window.innerWidth, window.innerHeight,
    siteSettings.portraitUARR[0], siteSettings.portraitUARR[1],
  );
  document.documentElement.style.setProperty(
    "--pw", `${portraitUARR.width}px`
  );
  document.documentElement.style.setProperty(
    "--ph", `${portraitUARR.height}px`
  );

  // LANDSCAPE UARR ---------------------
  const landscapeUARR = calcUARR(
    window.innerWidth, window.innerHeight,
    siteSettings.landscapeUARR[0], siteSettings.landscapeUARR[1],
    siteSettings.maxLandscape[0], siteSettings.maxLandscape[1]
  );
  document.documentElement.style.setProperty(
    "--lw", `${landscapeUARR.width}px`
  );
  document.documentElement.style.setProperty(
    "--lh", `${landscapeUARR.height}px`
  );

  // ACTUAL VIEWPORT HEIGHT ------------
  document.documentElement.style.setProperty(
    "--vph", `${window.innerHeight}px`
  );

  const availableWidth = window.innerWidth - siteSettings.maxLandscape[0];
  if (availableWidth >= siteSettings.minInterfaceAreaWidth) {
    if (availableWidth >= siteSettings.maxInterfaceAreaWidth) {
      document.documentElement.style.setProperty(
        "--interface-area-width", `${siteSettings.maxInterfaceAreaWidth}px`
      );
    } else {
      document.documentElement.style.setProperty(
        "--interface-area-width", `${availableWidth}px`
      );
    }
  }
}