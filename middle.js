const middle = (array) => {
  let length = array.length;
  let mid;
  let Elements = [];
  if (length === 1 || length === 2) {
    return [];
  }
  if (length % 2 === 0) {
    mid = length / 2;
    Elements.push(array[mid - 1]);
    Elements.push(array[mid]);
  } else if (length % 2 !== 0) {
    mid = (length - 1) / 2;
    Elements.push(array[mid]);
  }
  return Elements;
};
module.exports = middle;
