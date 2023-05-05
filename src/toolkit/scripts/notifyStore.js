import { writable, get } from "svelte/store";

// STATE -----------------------------
export const notification = writable({name: "animations", duration:10000});

// FUNCTIONS -------------------------------
export function setNotification(name, duration) {
  notification.set({name: name, duration: duration});
};