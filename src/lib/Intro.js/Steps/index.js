import stepsArray from "./stepsArray";
import mockArray from "./mockArray";

const correctSteps = () =>
  stepsArray().length > 0 ? stepsArray() : mockArray();

export default correctSteps;
