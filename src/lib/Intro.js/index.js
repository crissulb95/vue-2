import introJs from "intro.js";
import steps from "./Steps";
import SETUP from "./SETUP";
import isInViewport from "./Helpers/isInViewport";
import secondaryMockArray from "./Steps/secondaryMockArray";

/**
 * Inicializador de la librería IntroJS(librería de Tours para una aplicación)
 * @param {Function} loadedComponentFn Referencia de función $nextTick
 * @param {Boolean} conditional Condicional si se va a inicializar IntroJS
 * @see https://introjs.com/ es una biblioteca liviana para crear un Onboarding para clientes paso a paso
 */

const intro = (loadedComponentFn, conditional, infoHook) => {
  if (conditional) {
    return loadedComponentFn(() => {
      introJs()
        .setOptions({
          ...SETUP,
          steps: [...SETUP.steps, ...steps()],
        })
        .start()
        .oncomplete(() => infoHook(true));
    });
  }
};

export default intro;
