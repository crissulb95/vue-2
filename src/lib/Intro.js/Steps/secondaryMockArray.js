import { tooltipObjectCreator } from "../Helpers/tooltipObjectCreator";

const secondaryMockArray = () => [
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

export default secondaryMockArray;
