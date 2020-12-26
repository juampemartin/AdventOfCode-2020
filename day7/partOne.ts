/* --- Day 7: Handy Haversacks --- */

const fs = require('fs');

/*
* First of all we read the file wich has the input of our puzzle
*/

const puzzleInput = fs.readFileSync('./input.txt', 'utf-8').split('\n');

type BNode = {
  counted: boolean;
  bagName: string;
  children: BNode[];
};

type graphNodeForest = {
  [key: string]: BNode;
};

const forest: graphNodeForest = {};

function getNode (name: string): BNode {
  if (!forest[name]) {
    forest[name] = {
      counted: false,
      bagName: name,
      children: []
    };
  }
  return forest[name];
}

puzzleInput.filter(x => x.length).forEach(line => {
  let splitLines = line.split(" ");

  if (splitLines.length === 0) {
    return;
  }

  const name = splitLines.slice(0,2).join(" ");
  const node = getNode(name);

  if (line.includes("no other bags")) {
    return;
  }

  splitLines = splitLines.slice(4);

  do {
    const bag = splitLines.slice(1, 3).join(" ");
    splitLines = splitLines.slice(4);

    node.children.push(getNode(bag));
  } while (splitLines.length >= 4);
});

let totalCount = 0;
function countThem(walkList: BNode[]) {
  walkList.forEach(n => {
    if (!n.counted) {
      totalCount++;
    }
    n.counted = true;
  });
}

const theGolden = "shiny gold";

function giveMeTheGold(node: BNode, walkList: BNode[] = []) {
  if (node.bagName === theGolden) {
    countThem(walkList);
    return;
  }

  walkList.push(node);
  node.children.forEach(c => giveMeTheGold(c, walkList));
  walkList.pop();
}

for (const value of Object.values(forest)) {
  giveMeTheGold(value);
}

console.log("Founded " + totalCount + " bags");
