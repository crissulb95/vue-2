import Driver from "driver.js";
import { mockArray } from "./mock";

/**
 * Función para inicializar el script de Onboarding
 * @param {Function} loadedComponentFn
 * @param {Boolean} conditional
 */

export const mountDriver = (loadedComponentFn, conditional) => {
  console.log("mountDriver", loadedComponentFn, conditional);
  let driver = null;
  if (conditional) {
    loadedComponentFn(() => {
      driver = new Driver({
        keyboardControl: true,
      });
      // Define the steps for introduction
      driver.defineSteps(mockArray());
      console.log("TEST: ", mockArray());
      setTimeout(() => {
        // Start the introduction

        driver.start();
      }, 2000);
    });
  }
};

/* 
        const nextButton = document.querySelector("button.driver-next-btn");
        nextButton.addEventListener("click", () => {
          driver.moveNext();
        }); */
