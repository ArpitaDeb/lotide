const assertEqual = function(actual, expected) {
  const pass = '⌛⌛⌛⌛';
  const fail = '🛑🛑🛑';
  if (actual === expected) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = (array) => {
  if (array.length > 1) {
    return (array.slice(1));
  } else return [];
};
/* let newArray = [];
  if (array.length > 1) {
    for (let i = 1; i < array.length; i++) {
        newArray = array[i];
    }
    return newArray;
  }
  else return [];
*/

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(result, ["Lighthouse", "Labs"]);
// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
const empty = [];
console.log(tail(empty));
const ma = [1];
console.log(tail(ma));