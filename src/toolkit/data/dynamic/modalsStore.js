import { writable, get } from "svelte/store";

// STATE ---------------------------------
export const siteMenuModal = writable(true);

// MAP ------------------------------------
const map = {
  siteMenu: siteMenuModal,
};

// FUNCTIONS ---------------------------------
export const modals = {
  open(modal) {map[modal].set(true)},
  close(modal) {map[modal].set(false)},
  toggle(modal) {map[modal].set(!(get(map[modal])))},
};