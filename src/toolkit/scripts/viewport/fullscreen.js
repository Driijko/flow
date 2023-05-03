export default function fullscreen(state) {
  if (state) {
    if(document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();        // W3C spec
    }
    else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();     // Firefox
    }
    else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();  // Safari
    }
    else if(document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();      // IE/Edge
    }
  }
  else if (!state) {
    if(document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}