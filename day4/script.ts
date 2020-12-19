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
const passport = rawInput.split('\n')

/*
 * Now we have to create a const that contains all of the required fields
 * */

const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid', 'cid'];

/*
 * Once we have defined our required fields we have to split the lines into
 * key-value pairs
 * */

console.log(lines)

