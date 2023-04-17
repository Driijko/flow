import siteSettings from "../siteSettings";

export default function layout() {
  // SETTINGS -------------------------------------------------
  const uarr1Res = siteSettings.portraitUARR;
  const uarr2Res = siteSettings.landscapeUARR;

  const viewportRes = window.innerWidth/window.innerHeight;

  document.documentElement.style.setProperty("--viewport-height", `${window.innerHeight}px`);
  document.documentElement.style.setProperty("--uarr1-aspect-ratio",
    `${uarr1Res[0]}/${uarr1Res[1]}`
  );
  document.documentElement.style.setProperty("--uarr1-width", 
    viewportRes > uarr1Res[0] / uarr1Res[1] ? "auto" : "100vw"
  );
  document.documentElement.style.setProperty("--uarr1-height",
    viewportRes > uarr1Res[0] / uarr1Res[1] ? "var(--viewport-height)" : "auto"
  );
  document.documentElement.style.setProperty("--uarr2-aspect-ratio",
    `${uarr2Res[0]}/${uarr2Res[1]}`
  );
  document.documentElement.style.setProperty("--uarr2-width", 
    viewportRes < uarr2Res[0] / uarr2Res[1] ? "100vw" : "auto"
  );
  document.documentElement.style.setProperty("--uarr2-height",
    viewportRes < uarr2Res[0] / uarr2Res[1] ? "auto" : "var(--viewport-height)"
  );
  if (viewportRes <= 1) {
    if (viewportRes > (uarr1Res[0]/uarr1Res[1])) {
      document.documentElement.style.setProperty("--uarr-width",
        `${window.innerHeight * (uarr1Res[0]/uarr1Res[1])}px`
      );
    } else {
      document.documentElement.style.setProperty("--uarr-width", "100vw");
    }
  } else {
    if (viewportRes > (uarr2Res[0]/uarr2Res[1])) {
      document.documentElement.style.setProperty("--uarr-width",
        `${window.innerHeight * (uarr2Res[0]/uarr2Res[1])}px`
      );
    } else {
      document.documentElement.style.setProperty("--uarr-width", "100vw");
    }
  }
}