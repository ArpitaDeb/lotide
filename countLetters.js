const assertEqual = function(actual, expected) {
  const pass = '⌛⌛⌛⌛';
  const fail = '🛑🛑🛑';
  if (actual === expected) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = (sentence) => {
  const spRemSent = sentence.split(" ").join("");
  const letterCount = {};
  for (const letter of spRemSent) {
    if (letterCount[letter]) {
      letterCount[letter] += 1;
    } else letterCount[letter] = 1;
  } return letterCount;
};
console.log(countLetters("lighthouse in the house"));
console.log(countLetters("Ma babu babu r nei"));

