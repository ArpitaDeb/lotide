const takeUntil = function(array, callback) {
  // ...
  let results = [];
  const index = array.findIndex( item => callback(item));
  console.log(index);
  results = array.slice(0,index);
  return results;
};
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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'India' ]);
/* const takeUntil = function(array, callback) {
  let theOutput = [];

  for (let item of array) {
    if (!callback(item)) {
      theOutput.push(item);
    } else {
      break;
    }
  }
  return theOutput;
};*/
