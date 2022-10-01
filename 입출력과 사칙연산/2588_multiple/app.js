const fs = require("fs")
//const input = fs.readFileSync('./입출력과 사칙연산/2588_multiple/input.txt').toString().trim().split('\n');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

var a = parseInt(input[0])
var b = parseInt(input[1][2])
var c = parseInt(input[1][1])
var d = parseInt(input[1][0])
console.log(a*b)
console.log(a*c)
console.log(a*d)
console.log((a*b)+(a*c*10)+(a*d*100))