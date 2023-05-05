import { writable, get } from "svelte/store";

// STATE ---------------------------------
export const animationsOff = writable(false);

// FUNCTIONS -----------------------------
export function toggleAnimations() {
  animationsOff.set(!(get(animationsOff)));
};