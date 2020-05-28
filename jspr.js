const student = {
  name: 'john',
  age: 23,
  isActive: true
}
const names = [1, 2, 3];
const aray = JSON.stringify(names);
console.log(typeof aray);
console.log(aray);
const studentObjToString = JSON.stringify(student);
console.log(typeof studentObjToString);
console.log(studentObjToString);

const toJson = JSON.parse(studentObjToString);
console.log(toJson);
console.log(typeof toJson);


