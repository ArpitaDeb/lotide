const assertEqual = function(actual, expected) {
  const pass = '⌛⌛⌛⌛';
  const fail = '🛑🛑🛑';
  if (actual === expected) {
    console.log(`${pass} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${fail} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  let length1 = key1.length;
  let length2 = key2.length;
  if (length1 !== length2) {
    return false;
  } else {
    for(let i = 0;i < key1.length;i++) {
      let key = key1[i]; 
      let value1 = object1[key];
      let value2 = object2[key];
      {
      if(! eqArrays(value1, value2)){
        console.log(value1);
        console.log(value2);
        return false;
        }
      if (Array.isArray(value1) !== Array.isArray(value2)) {
        return false;
      } /*if (value1 !== value2) {
        return false;
      } */
    } 
  }return true;
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
      } else bothEqual = true;
    }
    return bothEqual;
  }
};
const ab = { a: "8", b: "7" };
const ba = { b: "2", a: "8" };
console.log(eqObjects(ab, ba)); // => false

const cd = { c: ["1", 4], d: ["2", 3] };
const dc = { d: ["4", 9], c: ["1", 4] };
console.log(eqObjects(cd, dc)); //true
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); //false
const hi = { a: "1", b: "7" };
const ih = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => false

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
const fg = { a: "5", b: "7" };
const gf = { b: "7", a: "5" };
console.log(eqObjects(fg, gf)); // => true
const xy = { c: ["1", 4], d: ["2", 3] };
const yx = { d: ["2", 3], c: ["1", 4] };
console.log(eqObjects(xy, xy)); 



