const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1,2,3,4,5];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    // console.log('item BEFORE: ', item); -->full word in the words array
    // console.log('item AFTER: ', callback(item));-->first letter in each word per our callback fn below
    // console.log('---');
  }
  return results;
}
const eqArrays = function(a , b) {
  return (JSON.stringify(a) === JSON.stringify(b));
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
const test1 = [ 'g', 'c', 't', 'm', 't' ];
const test3 = [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ];
const test4 = [2, 4, 5, 7];

const results1 = map(words, word => word[0]);
console.log(results1);
const results2 = map(words, word => word + 'ma');
console.log(results2);
const results3 = map(words, word => word.toUpperCase());
console.log(results3);
const results4 = map(words, word => word.length);
console.log(results4);
const results5 = map(numbers, num => num.toString());
console.log(results5);
assertArraysEqual(results1, test1);
assertArraysEqual(results4, test4);
assertArraysEqual(results3, test3);