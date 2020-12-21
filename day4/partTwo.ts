
/*
 * First we need to import the File System library from node.js to be able to
 * read files
 * */

const fs = require('fs')

/*
 * Now we read the txt file and save the content of it into a constant
 * */
const splittedInput = fs.readFileSync('./rawPuzzle.txt', 'utf-8').split('\n\n')

/*
 * Variable declaration
 * */

let data;
let finalSum;
let finalArray = [];
let happiness = [];
let validPassports = [];

/*
 * We have to define the fields that are required so we can validate the
 * passports' data later on*/

const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

const fieldDefinitions = {
  // A 4 digit character between 1920 and 2002
  byr: /^(?:19[2-9][0-9]|200[0-2])$/,
  // 2010 - 2020
  iyr: /^(?:201[0-9]|2020)$/,
  // 2020 - 2030
  eyr: /^(?:202[0-9]|2030)$/,
  // 150 - 193cm or 59 - 76in
  hgt: /^(?:(?:1[5-8][0-9]|19[0-3])cm|(?:59|6[0-9]|7[0-6])in)$/,
  // It has to start with # and has to be followed by six times 0-9 or a-f
  hcl: /^#[0-9a-f]{6}$/,
  // Any of the amb, blu, brn, gry, grn, hzl or oth
  ecl: /^(?:amb|blu|brn|gry|grn|hzl|oth)$/,
  // 9 sigits
  pid: /^\d{9}$/,
};

/*
 * Now we iterate through every element of the array previously create and
 * change their format from multiple lines to single lines
 * */
for (let index = 0; index < splittedInput.length; index++) {
  data = splittedInput[index].split('\n');
  finalSum = data.join(' ');
  finalArray.push(finalSum)
}

/*
 * Now we have to create a nested array (and array of arrays)
 * */

const passports = finalArray.map((entry) => entry.split('\s'));

/*
 * Now we iterate through each element of the passports array and push each one
 * of them to our previously created array happiness. Alse we need to create
 * a set so we can validate the data easier*/


for (let index = 0; index < finalArray.length; index++) {
  let data = passports[index][0].trim().split(' ').map((pair) => pair.split(':'));
  happiness.push(data);
}


let mappedData = [];

for (let index = 0; index < happiness.length; index++) {
  let map = new Map();
  happiness[index].forEach(([key, value]) => {
    map.set(key, value);
  });
  mappedData.push(map);
}



for (let index = 0; index < happiness.length; index++) {
  let isValid = Object.entries(fieldDefinitions).every(([field, regex]) => {
    return mappedData[index].has(field) && regex.test(mappedData[index].get(field));
  });
  if (isValid == true) { 
    validPassports.push(mappedData[index]);
  }
}

console.log(validPassports.length);







