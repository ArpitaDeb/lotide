
const tail = (array) => {
  if (array.length > 1) {
    return (array.slice(1));
  } else return [];
};
module.exports = tail;
/* let newArray = [];
  if (array.length > 1) {
    for (let i = 1; i < array.length; i++) {
        newArray = array[i];
    }
    return newArray;
  }
  else return [];
*/

