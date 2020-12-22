
const fs = require ('fs');

const rawInput = fs.readFileSync('./input.txt', 'utf-8').split('\n\n').filter (x => x);

let checkAnswersPartOne = () => {

  let totalVotes = 0;

  for (const group of rawInput) {
    const newSet = new Set([...group.replace(/\n/g, '')]);
    totalVotes += newSet.size;
  }
  return totalVotes;
}
console.log(checkAnswersPartOne());
