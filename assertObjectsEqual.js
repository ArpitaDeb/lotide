const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  let length1 = key1.length;
  let length2 = key2.length;
  if (length1 !== length2) {
    return false;
  } else {
    for(let key of key1) {
      let value1 = object1[key];
      let value2 = object2[key];
      {
      if(! eqArrays(value1, value2)){
        return false;
        }
      if (Array.isArray(value1) !== Array.isArray(value2)) {
        return false;
      } 
    } 
  }return true;
}
};
const eqArrays = function(a , b) {
  return (JSON.stringify(a) === JSON.stringify(b));
}; 
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  const pass = '⌛⌛⌛⌛';
  const fail = '🛑🛑🛑';
  if (eqObjects(actual, expected)) {
    console.log(`Example label: ${inspect(actual)}  ${inspect(expected)}`);
    console.log(`${pass} Assertion Passed`);
  } else {
    console.log(`${fail} Assertion Failed`);
  }
};
const ab = { a: "8", b: "7" };
const ba = { b: "2", a: "8" };
console.log(assertObjectsEqual(ab, ba)); // => false
const fg = { a: "5", b: "7" };
const gf = { b: "7", a: "5" };
console.log(assertObjectsEqual(fg, gf)); // => true
const xy = { c: ["1", 4], d: ["2", 3] };
const yx = { d: ["2", 3], c: ["1", 4] };
console.log(assertObjectsEqual(xy, xy)); //true


