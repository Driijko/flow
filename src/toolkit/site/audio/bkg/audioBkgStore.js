import { writable } from "svelte/store";
import storeUpdate from "../../../helpers/storeUpdate";

function createBackgroundAudio() {
  const {subscribe, update, set} = writable({
    trackPath: "./assets/audio/bkg/opening-prompt.mp3",
    volume: 0,
    paused: true,
    loop: false,
    currentTime: 0,
  });

  return {
    subscribe,
    load: trackPath => storeUpdate("trackPath", trackPath, update),
    play: ()=> storeUpdate("paused", false, update),
    pause: ()=> storeUpdate("paused", true, update),
    // togglePaused: ()=>
  }
}

export const audioStore = createBackgroundAudio();

export default audioStore;