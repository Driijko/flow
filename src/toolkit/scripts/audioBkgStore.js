import { writable, get } from "svelte/store";

// STATE ----------------------------------
export const audioBkgCurrentPlaylist = writable({identifier: "", tracks: []});
export const audioBkgCurrentPlaylistIndex = writable(0);
export const audioBkgCurrentTime = writable(0);
export const audioBkgLoop = writable(false);
export const audioBkgPaused = writable(true);
export const audioBkgPlayAfterLoad = writable(false);
export const audioBkgRestartCount = writable(0);
export const audioBkgTotalTime = writable(0);
export const audioBkgTrack = writable({name: "", path: ""});
export const audioBkgVolume = writable(0);

// FUNCTIONS ------------------------------------
export function audioBkgAdjustVolume(volume) {
  audioBkgVolume.set(volume);
};

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

export function audioBkgFadeLoadPlay(trackName, trackPath, duration) {
  const startingVolume = get(audioBkgVolume);
  audioBkgFade(duration - 0.1);
  const timerId = setTimeout(()=> {
    audioBkgAdjustVolume(startingVolume);
    audioBkgLoadPlay(trackName, trackPath);
    clearTimeout(timerId);
  }, duration);
};

export function audioBkgLoad(name, path) {
  audioBkgTrack.set({name: name, path: path});
  audioBkgPlayAfterLoad.set(false);
};

export function audioBkgLoadPlay(name, path) {
  audioBkgTrack.set({name:name,path:path});
  audioBkgPlayAfterLoad.set(true);
};

export function audioBkgNewPlaylist(identifier, tracks) {
  audioBkgCurrentPlaylist.set({identifier: identifier, tracks: tracks});
};

export function audioBkgUpdateCurrentPlaylistIndex(index) {
  audioBkgCurrentPlaylistIndex.set(index);
};

export function audioBkgNextPlaylistTrack() {
  audioBkgCurrentPlaylistIndex.set(
    ( get(audioBkgCurrentPlaylistIndex) + 1 ) 
    % get(audioBkgCurrentPlaylist).tracks.length
  );
};

export function audioBkgPlay() {audioBkgPaused.set(false)};

export function audioBkgPause() {audioBkgPaused.set(true)};

export function audioBkgRestart() {
  audioBkgCurrentTime.set(0);
  if (get(audioBkgPaused)) {audioBkgPlay()};
  audioBkgRestartCount.set(get(audioBkgRestartCount) + 1);
};

export function audioBkgSetLoop(boolean) {audioBkgLoop.set(boolean)};

export function audioBkgTogglePausePlay() {
  audioBkgPaused.set(!(get(audioBkgPaused)));
};

export function audioBkgUpdateTotalTime(time) {audioBkgTotalTime.set(time)};

export function audioBkgUpdateCurrentTime(time) {audioBkgCurrentTime.set(time)};