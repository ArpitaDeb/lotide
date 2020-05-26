const assertEqual = (actual, expected) => {
  const pass = '⌛⌛⌛⌛';
  const fail = '🛑🛑🛑';
  if (actual === expected) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};
const head = (array) => {
  if (array.length > 0) {
    return array[0];
  } else return undefined;
};

assertEqual(head([5,6,7]), 5);
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");