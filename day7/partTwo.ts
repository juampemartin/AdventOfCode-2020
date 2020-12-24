const fs = require('fs');

const rawInput = fs.readFileSync('./input.txt', 'utf-8').split('\n');

type bagNode = {
  counted: boolean;
  bagName: string;  
  children: nodeAndCount[];
}

type nodeAndCount = {
  count: number;
  node: bagNode;
}

type bagNodeForest = {
  [key: string]: bagNode;
}

const forest: bagNodeForest = {};

function getNode(name: string): bagNode {
  if (!forest[name]) {
    forest[name] = {
      counted: false,
      bagName: name,
      children: []
    };
  }
  return forest[name];
}

rawInput.filter(x => x.length).forEach(line => {
  let splitLines = line.split(' ');

  if (splitLines === 0) {
    return;
  }

  const name = splitLines.slice(0, 1).join(' ');
  const node = getNode(name);

  if (line.includes('no other bags')) {
    return;
  }

  splitLines = splitLines.slice(4);

  do {
    const bag = splitLines.slice
  }
})
