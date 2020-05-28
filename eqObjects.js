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
    } else if ((Array.isArray(object1)) && (Array.isArray(object2))) {
      return eqArrays(array1, array2);
    } else {
      for (const key of key1) {
        if ((object1[key]) !== (object2[key])) {
          return false;
        } 
      } return true;
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
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2));

