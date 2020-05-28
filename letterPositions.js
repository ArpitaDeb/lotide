const letterPositions = function(sentence) {
  const remSpSent = sentence.split(' ').join('');
  const results = {};
  for (const letter of remSpSent) {
    results[letter] = index(remSpSent, letter);
  }
  return results;
};
const index = (remSpSent, letter) => {
  let indexOfLetter = [];
  for (let i = 0; i < remSpSent.length; i++) {
    if (remSpSent[i] === letter) {
      indexOfLetter.push(i);
    }
  } return indexOfLetter;
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

console.log(letterPositions("lighthouse in the house"));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").o, [2]);
assertArraysEqual(letterPositions("hello").h, [3]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
// TEST CODE
