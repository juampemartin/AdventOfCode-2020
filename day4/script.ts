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
//- cid (Country ID) <-- WE CAN DISMISS THIS ONE SO THE PASSPORTS WITHOUT THIS
//                       FIELD WILL BE VALID

const fs = require('fs')

let rawInput;

fs.readFile('./raw.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  rawInput = data;
}) 

console.log(rawInput)
