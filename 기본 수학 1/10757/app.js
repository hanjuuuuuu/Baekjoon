const fs = require("fs")
const input = fs.readFileSync('./기본 수학 1/10757/input.txt').toString().trim().split(' ');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const A = BigInt(input[0]);
const B = BigInt(input[1]);
console.log((A+B).toString());