import { writable } from "svelte/store";

function createBackgroundAudio() {
  const {subscribe, update, set} = writable({
    trackPath: "",
    volume: 0,
    paused: true,
    loop: false,
    currentTime: 0,
  });

  return {
    subscribe,
    load: trackPath => update(prev => {
      return {
        ...prev,
        trackPath: trackPath,
      }
    })
  }
}

export const audioStore = createBackgroundAudio();

export default audioStore;