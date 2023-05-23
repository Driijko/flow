import siteSettings from "../../data/static/siteSettings";
import calcUARR from "../utils/calcUARR";

export default function viewportCSS() {

  // ACTUAL VIEWPORT HEIGHT ------------
  document.documentElement.style.setProperty(
    "--vph", `${window.innerHeight}px`
  );

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
    siteSettings.landscapeUARR[0], siteSettings.landscapeUARR[1]
  );
  document.documentElement.style.setProperty(
    "--lw", `${landscapeUARR.width}px`
  );
  document.documentElement.style.setProperty(
    "--lh", `${landscapeUARR.height}px`
  );

  // EMBEDDED LANDSCAPE UARR ---------------------
  const embeddedLandscapeUARR = calcUARR(
    window.innerWidth, window.innerHeight,
    siteSettings.landscapeUARR[0], siteSettings.landscapeUARR[1],
    siteSettings.maxLandscape[0], siteSettings.maxLandscape[1]
  );
  document.documentElement.style.setProperty(
    "--elw", `${embeddedLandscapeUARR.width}px`
  );
  document.documentElement.style.setProperty(
    "--elh", `${embeddedLandscapeUARR.height}px`
  );

  // CONTENT CONTAINER ----------------------------------
  if (window.innerWidth <= window.innerHeight) {
    document.documentElement.style.setProperty(
      "--cw", `${portraitUARR.width}px`
    );
    document.documentElement.style.setProperty(
      "--ch", `${portraitUARR.height}px`
    );
  } else {
    document.documentElement.style.setProperty(
      "--cw", `${embeddedLandscapeUARR.width}px`
    );
    document.documentElement.style.setProperty(
      "--ch", `${embeddedLandscapeUARR.height}px`
    );
  }

  // INTERFACE AREA WIDTH -----------------------------------
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

  // INTERFACE CONTAINER -----------------------------------------
  if (window.innerWidth <= window.innerHeight) {
    document.documentElement.style.setProperty(
      "--iw", `${portraitUARR.width}px`
    );
    document.documentElement.style.setProperty(
      "--ih", `${portraitUARR.height}px`
    );
  } else {
    if ((window.innerWidth - siteSettings.maxLandscape[0]) >= siteSettings.minInterfaceAreaWidth) {
      if (availableWidth >= siteSettings.maxInterfaceAreaWidth) {
        document.documentElement.style.setProperty(
          "--iw", 
          `${siteSettings.maxInterfaceAreaWidth - (siteSettings.interfaceAreaPadding * 2)}px`
        );
        document.documentElement.style.setProperty(
          "--ih", 
          `${(siteSettings.maxInterfaceAreaWidth - (siteSettings.interfaceAreaPadding * 2)) * (siteSettings.portraitUARR[1]/siteSettings.portraitUARR[0])}px`
        );
      } else {
        document.documentElement.style.setProperty(
          "--iw", `${availableWidth - (siteSettings.interfaceAreaPadding * 2)}px`
        );
        document.documentElement.style.setProperty(
          "--ih", `${(availableWidth - (siteSettings.interfaceAreaPadding * 2)) * (siteSettings.portraitUARR[1]/siteSettings.portraitUARR[0])}px`
        );
      }
    } else {
      document.documentElement.style.setProperty(
        "--iw", `${embeddedLandscapeUARR.width}px`
      );
      document.documentElement.style.setProperty(
        "--ih", `${embeddedLandscapeUARR.height}px`
      );
    }
  }
}