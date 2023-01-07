let statement = "hello world!";
console.log(statement);

const fs = require('fs'); //file system
const readline = require("readline"); //allows fs to read line by line

const readFileLocation = "./midChampions.txt";

const scanChamps = () => {
    const text = fs.createReadStream(readFileLocation);
    const rl = readline.createInterface({
        input: text,
    })
    rl.on("line", (res) => {
        console.log(res);
    });
};
scanChamps();