const fs = require('fs');

const rawInput = fs.readFileSync('./input.txt', 'utf-8').split("\n");

function parse(line: string): [string, number] {
  const parts = line.split(" ");
  return [parts[0], +parts[1]];
}

const lines = rawInput.map(l => parse(l));
const seen = new Array(lines.length).fill(false);

let acc = 0;
let idx = 0;

do {
  seen[idx] = true;
  if (lines[idx][0] === "acc") {
    acc += lines[idx][1];
    idx++;
  } else if (lines[idx][0] === "nop") {
    idx++;
  } else if (lines[idx][0] === "jmp") {
    idx += lines[idx][1];
  }
} while (!seen[idx])

console.log("acc", acc);
