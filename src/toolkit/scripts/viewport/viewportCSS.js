import siteSettings from "../../data/static/siteSettings";

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

  // ACTUAL VIEWPORT HEIGHT ------------
  document.documentElement.style.setProperty(
    "--vp-height", `${window.innerHeight}px`
  );

  // PORTRAIT UARR --------------------
  if (viewportRes > portraitRes1) {
    document.documentElement.style.setProperty(
      "--pw", `${window.innerHeight * portraitRes1}px`);
    document.documentElement.style.setProperty(
      "--ph", `${window.innerHeight}px`);
  } else {
    document.documentElement.style.setProperty(
      "--pw", `${window.innerWidth}px`);
    document.documentElement.style.setProperty(
      "--ph", `${window.innerWidth * portraitRes2}px`);
  };

  // LANDSCAPE UARR
  if (viewportRes > landscapeRes1) {
    document.documentElement.style.setProperty(
      "--lw", `${window.innerHeight * landscapeRes1}px`);
    document.documentElement.style.setProperty(
      "--lh", `${window.innerHeight}px`);
  } else {
    document.documentElement.style.setProperty(
      "--lw", `${window.innerWidth}px`);
    document.documentElement.style.setProperty(
      "--lh", `${window.innerWidth * landscapeRes2}px`);
  };
}