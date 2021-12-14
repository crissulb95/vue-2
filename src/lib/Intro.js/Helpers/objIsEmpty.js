/**
 * Función que retorna si el objeto posee algún
 * par llave/valor
 * @param {Object} obj objeto a evaluar
 * @returns {Boolean}
 */
const objIsEmpty = (obj) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

export default objIsEmpty;
