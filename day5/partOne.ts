/*
 * This problem was a little bit tricky, but if you pay attention to the
 * question you will realize that thre is an easier way to solve it. At the
 * very first of the problem they tell us that this airline uses binary space
 * partitioning to seat people and if you keep reading you will notice there
 * are a lot of hints */

/*
 * Import the fs library
 * */

const fs = require('fs');

/*
 * Now we read the input file and split the string into an array
 * */

const rawInput = fs.readFileSync('./input.txt', 'utf-8').split('\n');

/*
 * Variables declaration
 * */

let replacedArray = [];
let integerValues = [];

/*
 *  ---------- FIRST PART OF THE PROBLEM ----------*/

/*
 * Now we loop through the array previously created and replace the character
 * with zeros and ones
 *
 * F's will be zeros ==> Because they represents the lower half
 * B's will be ones ==> Because they represents the upper half
 * R's will be ones ==> Because they represents the upper half
 * L's will be zeros ==> Because they represents the lower half
 * s*/

for (let index = 0; index < rawInput.length; index++) {
  let data = rawInput[index].replace(/F/g, '0')
  let data2 = data.replace(/B/g, '1')
  let data3 = data2.replace(/R/g, '1')
  let data4 = data3.replace(/L/g, '0');
  replacedArray.push(data4);
}

/*
 * Now we parse all the binary numbers into decimal numbers by using the
 * parseInt function, which first parameter is the number we want to convert
 * and the second parameter is the regix parameten which specifies the numeral
 * system we want to use*/

for (let index = 0; index < replacedArray.length; index++) {
  let data = parseInt(replacedArray[index].trim(), 2);
  integerValues.push(data);
}
integerValues.pop();

integerValues.sort(function(a, b) {
  return a - b;
});


let previousValue = integerValues[0];

for (let index = 1; index < integerValues.length; index++) {
  if ((previousValue + 1) != integerValues[index]) {
    console.log(integerValues[index]);
    console.log(previousValue);
    break;
  } else {
      previousValue++
  }
}

/*
 * In here I defined a function so it looks better ;)
 * */

let highestNumber = (newArray) => {
  return Math.max.apply(null, newArray);
}

/*
 * And finally we print our seat*/




