/*---------- PROBLEM STATEMENT ----------*/

//Basically all we have to do is validate data in people's passport.
//The required fields are the following:
//
//- byr (Birth year)
//- iyr (Issue year)
//- eyr (Expiration Year)
//- hgt (Height)
//- hcl (Hair Color)
//- ecl (Eye Color)
//- pid (Passport ID)
//- cid (Country ID) <-- WE CAN DISMISS THIS ONE SO THE PASSPORTS ARE VALID

const fs = require('fs')
/*
 * We read the input from a file and then we split it into a list of entries
*/

const rawInput = fs.readFileSync('./rawPuzzle.txt', 'utf-8');
const passport = rawInput.trim().split('\n');

/*
 * 
 * */
let requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid'];
/*
 * 
 * */

const arrayList = passport.map((entry) => entry.split('\s'));

let data;
let felicidad = [];

for (let index = 0; index < passport.length; index ++) {
  data = arrayList[index][0].split(' ');
  console.log(data)
  //felicidad.push(data);
  console.log(index);
}
