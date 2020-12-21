/*
 * */
const fs = require('fs');

const rawInput = fs.readFileSync('./input.txt', 'utf-8').split('\n');

let replacedArray = [];
let integerValues = [];
let mySeat;

for (let index = 0; index < rawInput.length; index++) {
  let data = rawInput[index].replace(/F/g, '0')
  let data2 = data.replace(/B/g, '1')
  let data3 = data2.replace(/R/g, '1')
  let data4 = data3.replace(/L/g, '0');
  replacedArray.push(data4);
}

for (let index = 0; index < replacedArray.length; index++) {
  let data = parseInt(replacedArray[index].trim(), 2);
  integerValues.push(data);
}
integerValues.pop();

let highestNumber = (newArray) => {
  return Math.max.apply(null, newArray);
}

console.log(highestNumber(integerValues));



