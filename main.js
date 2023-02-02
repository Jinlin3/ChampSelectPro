var fs = require("fs");
var text = fs.readFileSync("./midChampions.txt", "utf-8");
var textByLine = text.split("\n");

const mages = [];
const assassins = [];
const skirmishers = [];
const tanks = [];
const marksmen = [];
const bruisers = [];

let array; // pointer for array to be added to

for(let i = 0; i < textByLine.length; i++) {
    let currentLine = textByLine[i];
    switch (currentLine) {
        case "MAGES":
            array = mages;
            break;
        case "ASSASSINS":
            array = assassins;
            break;
        case "SKIRMISHERS":
            array = skirmishers;
            break;
        case "TANKS":
            array = skirmishers;
            break;
        case "MARKSMEN":
            array = marksmen;
            break;
        case "BRUISERS":
            array = bruisers;
            break;
        default:
            array.push(currentLine);
            break;
    }
}

console.log(assassins[0]);