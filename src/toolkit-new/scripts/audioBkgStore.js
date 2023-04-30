import { writable, get } from "svelte/store";

// STATE ----------------------------------
export const audioBkgTrack = writable({ 
  name: "blah", path: "./assets/audio/bkg/opening-prompt.mp3" 
});
export const audioBkgPaused = writable(true);
export const audioBkgCurrentTime = writable(0);
export const audioBkgTotalTime = writable(0);
export const audioBkgVolume = writable(0);
export const audioBkgPlayAfterLoad = writable(false);
export const audioBkgLoop = writable(false);

// FUNCTIONS ------------------------------------
export function audioBkgLoad(name, path) {
  audioBkgTrack.set({name: name, path: path});
  audioBkgPlayAfterLoad.set(false);
};
export function audioBkgLoadPlay(name, path) {
  audioBkgTrack.set({name:name,path:path});
  audioBkgPlayAfterLoad.set(true);
}
export function audioBkgPlay() {audioBkgPaused.set(false)};
export function audioBkgPause() {audioBkgPaused.set(true)};
export function audioBkgTogglePausePlay() {
  audioBkgPaused.set(!(get(audioBkgPaused)));
}
export function audioBkgFade(duration) {
  let currentVolume = get(audioBkgVolume) * 1000;
  let decrement = currentVolume / (duration/10);
  const timerId = setInterval(()=> {
    currentVolume -= decrement;
    if (currentVolume <= 0) {
      audioBkgAdjustVolume(0);
      clearInterval(timerId);
    } else {
      audioBkgAdjustVolume(currentVolume/1000);
    }
  },10);
};
export function audioBkgRestart() {audioBkgCurrentTime.set(0);};
export function audioBkgAdjustVolume(volume) {
  audioBkgVolume.set(volume);
};
export function audioBkgUpdateTotalTime(time) {audioBkgTotalTime.set(time)};
export function audioBkgUpdateCurrentTime(time) {audioBkgCurrentTime.set(time)};
export function audioBkgFadeLoadPlay(trackName, trackPath, duration) {
  const startingVolume = get(audioBkgVolume);
  audioBkgFade(duration - 0.1);
  const timerId = setTimeout(()=> {
    audioBkgAdjustVolume(startingVolume);
    audioBkgLoadPlay(trackName, trackPath);
    clearTimeout(timerId);
  }, duration);
};
export function audioBkgSetLoop(boolean) {audioBkgLoop.set(boolean)};