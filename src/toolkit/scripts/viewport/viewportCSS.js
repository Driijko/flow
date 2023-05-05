import siteSettings from "../../data/siteSettings";

export default function viewportCSS() {
  const viewportRes = window.innerWidth/window.innerHeight;
  const portraitRes1 = 
    siteSettings.portraitUARR[0] / siteSettings.portraitUARR[1];
  const portraitRes2 = 
    siteSettings.portraitUARR[1] / siteSettings.portraitUARR[0];
  const landscapeRes1 = 
    siteSettings.landscapeUARR[0] / siteSettings.landscapeUARR[1];
  const landscapeRes2 = 
    siteSettings.landscapeUARR[1] / siteSettings.landscapeUARR[0];

  document.documentElement.style.setProperty(
    "--viewport-height", `${window.innerHeight}px`);
    
  document.documentElement.style.setProperty(
    "--viewport-size", 
    `${(
      window.innerHeight * window.innerWidth)/siteSettings.smallestViewport
    }px`);

  // PORTRAIT UARR
  if (viewportRes > portraitRes1) {
    document.documentElement.style.setProperty(
      "--uarr1-width", `${window.innerHeight * portraitRes1}px`);
    document.documentElement.style.setProperty(
      "--uarr1-height", `${window.innerHeight}px`);
  } else {
    document.documentElement.style.setProperty(
      "--uarr1-width", `${window.innerWidth}px`);
    document.documentElement.style.setProperty(
      "--uarr1-height", `${window.innerWidth * portraitRes2}px`);
  };

  // LANDSCAPE UARR
  if (viewportRes > landscapeRes1) {
    document.documentElement.style.setProperty(
      "--uarr2-width", `${window.innerHeight * landscapeRes1}px`);
    document.documentElement.style.setProperty(
      "--uarr2-height", `${window.innerHeight}px`);
  } else {
    document.documentElement.style.setProperty(
      "--uarr2-width", `${window.innerWidth}px`);
    document.documentElement.style.setProperty(
      "--uarr2-height", `${window.innerWidth * landscapeRes2}px`);
  };
}