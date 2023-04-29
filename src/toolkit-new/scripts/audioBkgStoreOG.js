import { writable } from "svelte/store";
import storeUpdate from "./utils/storeUpdate";

function createBackgroundAudio() {
  const {subscribe, update, set} = writable({
    track: {
      path: "",
      name: "",
    },
    currentTime: 0,
    totalTime: 0,
    volume: 1,
    paused: true,
    loop: false,
    crossFade: {
      track: {
        path: "",
        name: "",
      },
      duration: 0,
    },
  });

  return {
    subscribe,
    set,
    load: (trackPath,trackName) => storeUpdate("track", {
      path: trackPath,
      name: trackName,
    }, update),
    play: ()=> storeUpdate("paused", false, update),
    pause: ()=> storeUpdate("paused", true, update),
    togglePaused: ()=> storeUpdate(
      "paused", prev => !(prev["paused"]), update, true
    ),
    volume: volume => storeUpdate("volume", volume, update),
    loop: boolean => storeUpdate("loop", boolean, update),
    restart: () => storeUpdate("currentTime", 0, update),
    currentTime(time) {storeUpdate("currentTime", time, update)},
    crossFade: (track, duration) => storeUpdate(
      "crossFade", {
        // registered: false, 
        track: track, 
        duration: duration,
      }, update
    ),
    // registerCrossFade: ()=> storeUpdate(
    //   "crossFade", {
    //     registered: true,
    //     track: "",
    //     duration: 0,
    //   }, update
    // ),
  }
}

export const audioBkgStore = createBackgroundAudio();

export default audioBkgStore;