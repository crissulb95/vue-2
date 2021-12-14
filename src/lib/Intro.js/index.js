import introJs from "intro.js";
import steps from "./Steps";
import SETUP from "./SETUP";
import isInViewport from "./Helpers/isInViewport";

const intro = (loadedComponentFn, conditional) => {
  if (conditional) {
    loadedComponentFn(() => {
      introJs()
        .setOptions({
          ...SETUP,
          steps: [...SETUP.steps, ...steps()],
        })
        .start();
    });
  }
};

export default intro;
