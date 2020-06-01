const eqArrays = function(a , b) {
  return (JSON.stringify(a) === JSON.stringify(b));
};

/*
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
*/
module.exports = eqArrays;

