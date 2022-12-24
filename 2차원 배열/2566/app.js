const fs = require("fs")
const input = fs.readFileSync('./2차원 배열/2566/input.txt').toString().trim().split('\n').map(Number);
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let max = Math.max(...input);

console.log(max);
console.log(input.indexOf(max)+1)