const assertEqual = function(actual, expected) {
  const pass = '⌛⌛⌛⌛';
  const fail = '🛑🛑🛑';
  if (actual === expected) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countOnly = (allItems) => {
  const results = {};
  for (const item of allItems) {
    console.log(item);
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }  
  }
  return results;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames);
console.log(result1);
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
// TEST CODE

