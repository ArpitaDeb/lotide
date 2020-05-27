const assertArraysEqual = (actual, expected) => {
  const pass = '⌛⌛⌛⌛';
  const fail = '🛑🛑🛑';
  if (eqArrays(actual, expected)) {
    console.log(`${pass} Assertion Passed`);
  } else {
    console.log(`${fail} Assertion Failed`);
  }
};
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
const without = (source, itemsToRemove) => {
  let returnedArray = [];
  for (let eachItem of source) {
    if (!itemsToRemove.includes(eachItem)) {
      returnedArray.push(eachItem);
    }
  }
  return returnedArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);