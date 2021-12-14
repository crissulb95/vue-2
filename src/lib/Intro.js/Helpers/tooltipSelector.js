const tooltipSelector = (selector) =>
  selector?.length ? document.querySelector(selector) : null;

export default tooltipSelector;
