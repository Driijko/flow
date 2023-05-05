import MuddyWatersPreview
from "../components/5-structures/content/nav-preview/MuddyWatersPreview.svelte";

const nav = {
  navigation: {
    type: "branch",
    list: ["music", "painting"]
  },
  music: {
    type: "branch", text: "Music",
    list: ["blues", "punk"],
  },
  painting: {
    type: "branch", text: "Painting",
    list: ["fauvism", "minimalism"]
  },
  blues: {
    type: "branch", text: "Blues",
    list: ["muddy-waters", "ma-rainey"],
  },
  punk: {
    type: "branch", text: "Punk",
    list: ["the-stooges", "bad-brains"],
  },
  fauvism: {
    type: "branch", text: "Fauvism",
    list: ["andre-derain", "henri-matisse"],
  },
  minimalism: {
    type: "branch", text: "Minimalism",
    list: ["ad-rheindhardt", "frank-stella"],
  },
  "muddy-waters": {
    type: "preview", text: "Muddy Waters", 
    component: MuddyWatersPreview,
  },
  "ma-rainey": {
    type: "page-link", text: "Ma Rainey",
  },
  "the-stooges": {
    type: "page-link", text: "The Stooges",
  },
  "bad-brains": {
    type: "page-link", text: "Bad Brains",
  },
  "andre-derain": {
    type: "page-link", text: "Andre Derain",
  },
  "henri-matisse": {
    type: "page-link", text: "Henri Matisse",
  },
  "ad-rheindhardt": {
    type: "page-link", text: "Ad Rheindhardt",
  },
  "frank-stella": {
    type: "page-link", text: "Frank Stella",
  },
};

export default nav;