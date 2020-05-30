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
const findKey = (object, callback) => {
  const allKeys = Object.keys(object);
  for (const key of allKeys) {
    //console.log(callback(object[key]));
    if (callback(object[key])) { 
      return key;
    } 
  } 
};
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"
assertArraysEqual(findKey(({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4)), undefined);
const testObj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 5 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
assertArraysEqual(findKey({}, x => x.stars === 4), undefined);
assertArraysEqual(findKey(testObj, x => x.stars === 5), 'elBulli');
