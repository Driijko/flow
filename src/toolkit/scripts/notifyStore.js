import { writable, get } from "svelte/store";

// STATE -----------------------------
export const notification = writable({name: "", duration:0});

// FUNCTIONS -------------------------------
export function setNotification(name, duration) {
  notification.set({name: name, duration: duration});
};