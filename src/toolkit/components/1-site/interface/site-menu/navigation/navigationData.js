import Chapter1Preview from "./previews/Chapter1Preview.svelte";
import Chapter2Preview from "./previews/Chapter2Preview.svelte";

const navigationData = {
  navigation: {
    type: "branch",
    list: [
      "introduction",
      "chapter-1",
      "chapter-2",
      "chapter-3",
      "chapter-4",
      "chapter-5",
      "chapter-6",
      "chapter-7",
      "chapter-8",
      "appendix"
    ],
  },
  introduction: {
    type: "page-link", text: "Introduction"
  },
  "chapter-1": {
    type: "preview", text: "1: Beginnings",
    component: Chapter1Preview,
  },
  "chapter-2": {
    type: "preview", text: "2: Breakthrough",
    component: Chapter2Preview,
  },
  "chapter-3": {
    type: "preview", text: "3: Jazzy Nina",
    component: null,
  },
  "chapter-4": {
    type: "preview", text: "4: Folksy Nina",
    component: null,
  },
  "chapter-5": {
    type: "preview", text: "5: Civil Rights",
    component: null,
  },
  "chapter-6": {
    type: "preview", text: "6: Black Power",
    component: null,
  },
  "chapter-7": {
    type: "preview", text: "7: Exile",
    component: null,
  },
  "chapter-8": {
    type: "preview", text: "8: The Later Years",
    component: null,
  },
  "appendix": {
    type: "page-link", text: "Appendix:<br/> Listening to Nina Simone",
  }
}

export default navigationData;