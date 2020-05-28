const eqArrays = (array1, array2) => {
  let bothEqual = true;
  if (array1.length !== array2.length) {
    bothEqual = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        bothEqual = false;
      }
    }
    return bothEqual;
  }
};
const assertArraysEqual = (array1, array2) => {
  const pass = '⌛⌛⌛⌛';
  const fail = '🛑🛑🛑';
  if (eqArrays(array1, array2)) {
    console.log(`${pass} Assertion Passed`);
  } else {
    console.log(`${fail} Assertion Failed`);
  }
};
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
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [ 4 ]);