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
  tooltipObjectCreator({
    bottomSectionInfo: {
      text: `This is <strong>another step</strong> that focuses on this hidden image`,
    },
    selector: ".hidden-pokemon",
  }),
  tooltipObjectCreator(),
  tooltipObjectCreator({
    bottomSectionInfo: {
      text: `This is <strong>another step</strong> that focuses on this hidden image`,
    },
    selector: "#option-3",
  }),
  tooltipObjectCreator({
    bottomSectionInfo: {
      text: "This step focuses on this option and position",
    },
    selector: "#option-3",
    position: "right",
  }),
  tooltipObjectCreator({
    topSectionInfo: {
      title: "We are almost there",
    },
    bottomSectionInfo: {
      text: "We are arriving right around our final step!",
    },
    selector: "#option-4",
  }),
  tooltipObjectCreator({
    topSectionInfo: {
      title: "Farewell!",
    },
    bottomSectionInfo: {
      text: "And this is our final step!",
    },
    selector: "#replay",
    tooltipClass: "modal-popover-class final",
    position: "left",
  }),
];

export default mockArray;
