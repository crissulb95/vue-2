import { tooltipObjectCreator } from "../Helpers/tooltipObjectCreator";

const mockArray = () => [
  tooltipObjectCreator({
    topSectionInfo: {
      imgItem: {
        src: "/Empty state.png",
        alt: "logo safit",
        caption: "logo safit",
      },
      title: "Bienvenido/a al nuevo Safit",
      // extraHTML: `<h3>just a test</h3>`,
    },
    bottomSectionInfo: {
      text: "Una manera más eficiente de operar las funcionalidades de antes, junto a nuevos módulos",
      // extraHTML: `<h3>just a test</h3>`,
    },
    tooltipClass: "modal-popover-class introduction",
  }),
  tooltipObjectCreator({
    topSectionInfo: {
      imgItem: {
        src: "/image.png",
        alt: "logo safit",
        caption: "logo safit",
      },
      title: "Hagamos un recorrido",
      // extraHTML: `<h3>just a test</h3>`,
    },
    bottomSectionInfo: {
      text: "De manera rápida le enseñaremos algunas novedades del sistema para que pueda utilizarlo de la mejor manera",
      // extraHTML: `<h3>just a test</h3>`,
    },
    tooltipClass: "modal-popover-class introduction",
  }),
];

export default mockArray;
