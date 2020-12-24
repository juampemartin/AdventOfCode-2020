/* --- Day 7: Handy Haversacks --- */
var fs = require('fs');
/*
* First of all we read the file wich has the input of our puzzle
*/
var puzzleInput = fs.readFileSync('./input.txt', 'utf-8').split('\n');
var forest = {};
function getNode(name) {
    if (!forest[name]) {
        forest[name] = {
            counted: false,
            bagName: name,
            children: []
        };
    }
    return forest[name];
}
puzzleInput.filter(function (x) { return x.length; }).forEach(function (line) {
    var splitLines = line.split(" ");
    if (splitLines.length === 0) {
        return;
    }
    var name = splitLines.slice(0, 2).join(" ");
    var node = getNode(name);
    if (line.includes("no other bags")) {
        return;
    }
    splitLines = splitLines.slice(4);
    do {
        var bag = splitLines.slice(1, 3).join(" ");
        splitLines = splitLines.slice(4);
        node.children.push(getNode(bag));
    } while (splitLines.length >= 4);
});
var totalCount = 0;
function countThem(walkList) {
    walkList.forEach(function (n) {
        if (!n.counted) {
            totalCount++;
        }
        n.counted = true;
    });
}
var theGolden = "shyny gold";
function giveMeTheGold(node, walkList) {
    if (walkList === void 0) { walkList = []; }
    if (node.bagName === theGolden) {
        countThem(walkList);
        return;
    }
    walkList.push(node);
    node.children.forEach(function (c) { return giveMeTheGold(c, walkList); });
    walkList.pop();
}
for (var _i = 0, _a = Object.values(forest); _i < _a.length; _i++) {
    var value = _a[_i];
    giveMeTheGold(value);
}
console.log("Founded " + totalCount + "bags");
