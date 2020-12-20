
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
 * We create an array where we are going to be pushing elements
 * */
let happiness = [];



/*
 * Now we iterate through each element of the passports array and push each one
 * of them to our previously create array happiness*/
for (let index = 0; index < finalArray.length; index++) {
  let data = passports[index][0].split(' ');
  happiness.push(data);
}

/*
 * We have to define the fields that are required so we can validate the
 * passports' data later on*/
const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid']
