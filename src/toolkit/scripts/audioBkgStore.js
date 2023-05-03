import { writable, get } from "svelte/store";

// STATE ----------------------------------
export const audioBkgCurrentPlaylist = writable({name: "", tracks: []});
export const audioBkgCurrentPlaylistIndex = writable(0);
export const audioBkgCurrentTime = writable(0);
export const audioBkgLoop = writable(false);
export const audioBkgPaused = writable(true);
export const audioBkgPlayAfterLoad = writable(false);
export const audioBkgTotalTime = writable(0);
export const audioBkgTrack = writable({ 
  name: "Opening Prompt Loop", path: "./assets/audio/bkg/opening-prompt.mp3" 
});
export const audioBkgVolume = writable(1);

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

export function audioBkgNewPlaylist(name, tracks) {
  audioBkgCurrentPlaylist.set({name: name, tracks: tracks});
};

export function audioBkgUpdateCurrentPlaylistIndex(index) {
  audioBkgCurrentPlaylistIndex.set(index);
};

export function audioBkgNextPlaylistTrack() {
  let nextIndex = get(audioBkgCurrentPlaylistIndex) + 1;
  if (nextIndex > get(audioBkgCurrentPlaylist).tracks.length - 1) {
    nextIndex = 0;
  };
  audioBkgCurrentPlaylistIndex.set(nextIndex);
};

export function audioBkgPlay() {audioBkgPaused.set(false)};

export function audioBkgPause() {audioBkgPaused.set(true)};

export function audioBkgRestart() {audioBkgCurrentTime.set(0);};

export function audioBkgSetLoop(boolean) {audioBkgLoop.set(boolean)};

export function audioBkgTogglePausePlay() {
  audioBkgPaused.set(!(get(audioBkgPaused)));
};


export function audioBkgUpdateTotalTime(time) {audioBkgTotalTime.set(time)};

export function audioBkgUpdateCurrentTime(time) {audioBkgCurrentTime.set(time)};