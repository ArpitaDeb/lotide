/*
const eqArrays = function(a , b) {
  return (JSON.stringify(a) === JSON.stringify(b));
};
*/
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
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], ['1', '2', '3']);
// TEST CODE
