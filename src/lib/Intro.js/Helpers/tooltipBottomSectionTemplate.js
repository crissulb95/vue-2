import { objIsEmpty } from ".";

/**
 * Función que retorna un Template String (Plantillas de cadenas)
 * requiere un objeto que contenga un texto(text);
 * y con posibilidad de pasar
 * HTML extra(extraHTML) mediante un Template String, si es necesario.
 *
 * @param {Object} bottomSectionInfo un objeto que contenga un texto y HTML extra
 * @param {String} bottomSectionInfo.text string que se usará como texto del tooltip
 * @param {String} bottomSectionInfo.extraHTML Template String que se usará, si existe, como HTML extra después del texto(PRECAUCIÓN: Puede requerir estilos nuevos)
 * @returns {String} Template String contenedor de HTML para la parte baja del tooltip
 */
const tooltipBottomSectionTemplate = (bottomSectionInfo) => {
  // TODO: falta un if(isString) para las propiedades del objeto pasado o un try/catch

  const { text, extraHTML } = bottomSectionInfo;
  if (
    !objIsEmpty(bottomSectionInfo) &&
    (text.length > 0 || extraHTML.length > 0)
  ) {
    return `
      <p class="text-container">${text}</p>
      ${extraHTML?.length ? extraHTML : ""}
    `;
  }
};

export default tooltipBottomSectionTemplate;
