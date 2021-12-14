import {
  objIsEmpty,
  tooltipBottomSectionTemplate,
  tooltipSelector,
  tooltipTopSectionTemplate,
} from ".";

/**
 * Función para crear el JSON que conforme
 * la unidad del Step/Tooltip para IntroJS
 * @param {Object} tooltipInfo un objeto con la información para crear el JSON del tooltip
 * @param {Object} tooltipInfo.topSectionInfo un objeto que contenga una imagen, un título y HTML extra
 * @param {Object} tooltipInfo.bottomSectionInfo un objeto que contenga un texto y HTML extra
 * @param {String} tooltipInfo.tooltipClass un string para usarla como clase del tooltip
 * @param {String} tooltipInfo.selector un string para usar como selector para el elemento DOM que se va a destacar
 * @param {String} tooltipInfo.position un string para usar como posición probable(depende del espacio disponible) para el tooltip
 * @returns {JSON} JSON listo para renderizar una unidad de Step/Tooltip
 * @see {@link https://introjs.com/docs/examples/basic/json-config}
 */
export const tooltipObjectCreator = (tooltipInfo) => {
  if (tooltipInfo) {
    const {
      topSectionInfo,
      bottomSectionInfo,
      tooltipClass,
      selector,
      position,
      ...rest
    } = tooltipInfo;

    if (
      (topSectionInfo && !objIsEmpty(topSectionInfo)) ||
      (bottomSectionInfo && !objIsEmpty(bottomSectionInfo))
    ) {
      return {
        title: tooltipTopSectionTemplate(topSectionInfo),
        intro: tooltipBottomSectionTemplate(bottomSectionInfo),
        tooltipClass: tooltipClass?.length ? tooltipClass : "",
        element: tooltipSelector(selector),
        position,
        ...rest,
      };
    }
  }
  return {
    title: "Mock test",
    tooltipClass: "modal-popover-class introduction",
  };
};
