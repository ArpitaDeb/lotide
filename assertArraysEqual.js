const eqArrays = require("./eqArrays");
const assertArraysEqual = (array1, array2) => {
  const pass = '⌛⌛⌛⌛';
  const fail = '🛑🛑🛑';
  if (eqArrays(array1, array2)) {
    console.log(`${pass} Assertion Passed`);
  } else {
    console.log(`${fail} Assertion Failed`);
  }
};

module.exports = assertArraysEqual;
/*
const eqArrays = function(a , b) {
  return (JSON.stringify(a) === JSON.stringify(b));
};
*/