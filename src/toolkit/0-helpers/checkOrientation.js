export default function checkOrientation() {
  if (window.innerWidth <= window.innerHeight) {
    return "portrait";
  } else {
    return "landscape";
  }
}