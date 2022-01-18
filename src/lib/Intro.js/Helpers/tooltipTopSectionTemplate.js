import { objIsEmpty } from ".";

/**
 * Función que retorna un Template String (Plantillas de cadenas)
 * requiere un objeto que contenga una imagen(imgItem),
 * un título(title); y con posibilidad de pasar
 * HTML extra(extraHTML) mediante un Template String, si es necesario.
 *
 * @param {Object} topSectionInfo un objeto que contenga una imagen, un título y HTML extra
 * @param {Object} topSectionInfo.imgItem contiene información de src, alt y caption para una imagen
 * @param {String} topSectionInfo.imgItem.src contiene información de src para una imagen
 * @param {String} topSectionInfo.imgItem.alt contiene información de alt para una imagen
 * @param {String} topSectionInfo.imgItem.caption contiene información de caption para una imagen
 * @param {String} topSectionInfo.title string que se usará como título del tooltip
 * @param {String} topSectionInfo.extraHTML Template String que se usará, si existe, como HTML extra por debajo del título(PRECAUCIÓN: Puede requerir estilos nuevos)
 * @returns {String} Template String contenedor de HTML para la parte alta del tooltip
 */
const tooltipTopSectionTemplate = (topSectionInfo) => {
  // TODO: falta un if(isString) para las propiedades del objeto pasado o un try/catch
  if (topSectionInfo && !objIsEmpty(topSectionInfo)) {
    const { imgItem, title, extraHTML } = topSectionInfo;
    if (
      (imgItem && !objIsEmpty(imgItem)) ||
      title.length > 0 ||
      extraHTML.length > 0
    ) {
      return `
        <div class="top-container">
          ${
            imgItem?.src.length
              ? `<figure class="image-container">
              <img src="${imgItem.src}" alt="${imgItem.alt}" />
              <figcaption>${imgItem.caption}</figcaption>
            </figure>`
              : ""
          }
          ${title.length ? `<h2>${title}</h2>` : ""}
          ${extraHTML?.length ? extraHTML : ""}
        </div>
      `;
    }
  }
};

export default tooltipTopSectionTemplate;
