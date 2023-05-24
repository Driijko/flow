// import siteSettings from "../../data/static/siteSettings";
import { layout } from "../../data/static/siteSettings";
import calcUARR from "../utils/calcUARR";

const { portraitARWidth, portraitARHeight, landscapeARWidth, landscapeARHeight, maxLandscapeWidth, maxLandscapeHeight, minInterfaceAreaWidth, maxInterfaceAreaWidth, interfaceAreaPadding } = layout;

export default function viewportCSS() {

  // ACTUAL VIEWPORT HEIGHT ------------
  document.documentElement.style.setProperty(
    "--vph", `${window.innerHeight}px`
  );

  // MOBILE MODE -----------------------------------
  if (window.innerWidth <= window.innerHeight) {

    const portraitUARR = calcUARR(
      window.innerWidth, window.innerHeight,
      portraitARWidth, portraitARHeight
    );

    document.documentElement.style.setProperty(
      "--cw", `${portraitUARR.width}px`
    );
    document.documentElement.style.setProperty(
      "--ch", `${portraitUARR.height}px`
    );
    document.documentElement.style.setProperty(
      "--iw", `${portraitUARR.width}px`
    );
    document.documentElement.style.setProperty(
      "--ih", `${portraitUARR.height}px`
    ); 

  } // DESKTOP MODE ----------------------------------
  else {

    const landscapeUARR = calcUARR(
      window.innerWidth, window.innerHeight,
      landscapeARWidth, landscapeARHeight,
      maxLandscapeWidth, maxLandscapeHeight
    );

    document.documentElement.style.setProperty(
      "--cw", `${landscapeUARR.width}px`
    );
    document.documentElement.style.setProperty(
      "--ch", `${landscapeUARR.height}px`
    );

    // SMALL DESKTOP MODE ----------------------------
    if ((window.innerWidth - maxLandscapeWidth) < minInterfaceAreaWidth) {
      document.documentElement.style.setProperty(
        "--iw", `${landscapeUARR.width}px`
      );
      document.documentElement.style.setProperty(
        "--ih", `${landscapeUARR.height}px`
      ); 
      
    } // LARGE DESKTOP MODE -----------------------------
    else {
      const availableWidth = window.innerWidth - maxLandscapeWidth;
      let interfaceAreaWidth;

      if (availableWidth <= maxInterfaceAreaWidth) {
        interfaceAreaWidth = availableWidth;
      } else {
        interfaceAreaWidth = maxInterfaceAreaWidth;
      }

      document.documentElement.style.setProperty(
        "--iaw", `${interfaceAreaWidth}px`
      );

      const interfaceContainerUARR = calcUARR(
        interfaceAreaWidth - (interfaceAreaPadding * 2), window.innerHeight,
        portraitARWidth, portraitARHeight
      );

      document.documentElement.style.setProperty(
        "--iw", `${interfaceContainerUARR.width}px`
      );
      document.documentElement.style.setProperty(
        "--ih", `${interfaceContainerUARR.height}px`
      );

    };
  };
};