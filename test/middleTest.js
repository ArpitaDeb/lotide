const assert = require('chai').assert;
const middle  = require('../middle');
describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.strictEqual(middle([1, 2, 3]), [2]);
  });
});
/*const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [ 4 ]);
*/