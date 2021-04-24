export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getPreviousElement = (array, element) => {
  return array[(array.indexOf(element) + array.length - 1) % array.length];
};

export const getNextElement = (array, element) => {
  return array[(array.indexOf(element) + 1) % array.length];
};
