import { writable, get } from "svelte/store";

// STATE ---------------------------------
export const siteMenuModal = writable(false);
export const audioVolumeModal = writable(false);
export const playlistModal = writable(true);

// MAP ------------------------------------
const map = {
  siteMenu: siteMenuModal,
  audioVolume: audioVolumeModal,
  playlist: playlistModal,
};

// FUNCTIONS ---------------------------------
export const modals = {
  open(modal) {map[modal].set(true)},
  close(modal) {map[modal].set(false)},
  toggle(modal) {map[modal].set(!(get(map[modal])))},
};