const isInViewport = (el) => {
  const { top, left, right, bottom } = el.getBoundingClientRect();
  /*const thing = el.getBoundingClientRect();
  console.table({
    top,
    left,
    bottom,
    right,
  });
  console.log(top - bottom, left - right);
  console.log(thing); */
  return (
    top >= 0 &&
    left >= 0 &&
    bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export default isInViewport;
