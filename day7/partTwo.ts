const fs = require('fs');

const rawInput = fs.readFileSync('./input.txt', 'utf-8').split('\n');

type nodeAndCount = {
  count: number;
  node: bagNode;
}

type bagNode = {
  counted: boolean;
  bagName: string;  
  children: nodeAndCount[];
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
  let splitLines = line.split(" ");

  if (splitLines === 0) {
    return;
  }

  const name = splitLines.slice(0, 2).join(" ");
  const node = getNode(name);

  if (line.includes("no other bags")) {
    return;
  }

  splitLines = splitLines.slice(4);

  do {
    const bag = splitLines.slice(1, 3).join(" ");

    node.children.push({
      count: +splitLines[0],
      node: getNode(bag)
    });

    splitLines = splitLines.slice(4);
  } while (splitLines.length >= 4);
});

function getChildren(node: nodeAndCount, c: number = 1): number {
  if (node.node.children.length === 0) {
    return c * node.count;
  }

  c *= node.count;

  let total = c;
  console.log("gmyc", node.node.bagName, total, c);

  node.node.children.forEach((child: nodeAndCount) => {
    const t = getChildren(child, c);
    console.log(" gmyc - children", node.node.bagName, child.node.bagName, t);
    total += t;
  });

  console.log("gmyc - end", node.node.bagName, total);

  return total;
}

const shinyGold = getNode("shiny gold");
const found = new Set<bagNode>();
const foundCount = shinyGold.children.reduce((acc: number, child: nodeAndCount) => {
  return acc + getChildren(child);
}, 0);

console.log("Founded " + foundCount + " bags");
