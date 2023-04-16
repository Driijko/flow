import { writable } from "svelte/store";
import storeUpdate from "../../../helpers/storeUpdate";

function createBackgroundAudio() {
  const {subscribe, update, set} = writable({
    trackPath: "./assets/audio/bkg/opening-prompt.mp3",
    volume: 1,
    paused: true,
    loop: false,
    currentTime: 0,
    crossFade: {
      registered: true,
      trackPath: "",
      duration: 0,
    }
  });

  return {
    subscribe,
    set,
    load: trackPath => storeUpdate("trackPath", trackPath, update),
    play: ()=> storeUpdate("paused", false, update),
    pause: ()=> storeUpdate("paused", true, update),
    togglePaused: ()=> storeUpdate(
      "paused", prev => !(prev["paused"]), update, true
    ),
    volume: volume => storeUpdate("volume", volume, update),
    loop: boolean => storeUpdate("loop", boolean, update),
    crossFade: (trackPath, duration) => storeUpdate(
      "crossFade", {
        registered: false, 
        trackPath: trackPath, 
        duration: duration,
      }, update
    ),
    registerCrossFade: ()=> storeUpdate(
      "crossFade", {
        registered: true,
        trackPath: "",
        duration: 0,
      }, update
    ),
  }
}

export const audioStore = createBackgroundAudio();

export default audioStore;