
const fs = require ('fs');

const rawInput = fs.readFileSync('./input.txt', 'utf-8').split('\n\n').filter (x => x);

let checkAnswersPartOne = () => {

  let totalVotesPartOne = 0;
  let totalVotesPartTwo = 0;

  for (const group of rawInput) {
    const newSet = new Set([...group.replace(/\n/g, '')]);
    totalVotesPartOne += newSet.size;
    totalVotesPartTwo += [...newSet].filter(char => group.split('\n').filter(x => x).every(form => form.includes(char))).length;
  }
  console.log(totalVotesPartOne);
  console.log(totalVotesPartTwo);
}

checkAnswersPartOne();
