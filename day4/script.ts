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

import fs from 'fs';
/*
 * We read the input from a file and then we split it into a list of entries
*/

const rawInput = fs.readFileSync('./raw.txt', 'utf-8');
const inputList = rawInput
  .trim()
  .split('\n\n');

/*
 * Split the entries into lines
*/
const lineList = inputList.map(entry => entry.split('\n'));
console.log(lineList);

/*
 * Convert the lines into arrays 
*/


/*
 * Combine the arrays into a single array 
*/


/*
 * Convert the resulting array into  a set 
*/


/*
 * Check if all the required fields are in the set 
*/

