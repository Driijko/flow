import { writable, get } from "svelte/store";
import { tweened } from "svelte/motion";
import { linear } from "svelte/easing";

// STATE ----------------------------------
export const audioBkgTrack = writable({ name: "", path: "" });
export const audioBkgPaused = writable(true);
export const audioBkgCurrentTime = writable(0);
export const audioBkgTotalTime = writable(0);
export const audioBkgVolume = tweened(1, {easing: linear});
export const audioBkgPlayAfterLoad = writable(false);
export const audioBkgLoop = writable(false);

// METHODS ------------------------------------
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
  audioBkgVolume.set(0,{duration:duration});
};
export function audioBkgRestart() {audioBkgCurrentTime.set(0);};
export function audioBkgAdjustVolume(volume) {
  audioBkgVolume.set(volume, {duration: 0});
};
export function audioBkgUpdateTotalTime(time) {audioBkgTotalTime.set(time)};
export function audioBkgUpdateCurrentTime(time) {audioBkgCurrentTime.set(time)};
export function audioBkgFadeLoadPlay(trackName, trackPath, duration) {
  const currentVolume = get(audioBkgVolume);
  audioBkgFade(duration);
  const timerId = setTimeout(()=> {
    audioBkgAdjustVolume(currentVolume);
    audioBkgLoadPlay(trackName, trackPath);
    clearTimeout(timerId);
  }, duration);
};
export function audioBkgSetLoop(boolean) {audioBkgLoop.set(boolean)};