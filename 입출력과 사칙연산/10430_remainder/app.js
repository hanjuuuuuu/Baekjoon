const fs = require("fs")
const input = fs.readFileSync('./입출력과 사칙연산/10430_remainder/input.txt').toString().split(' ');

//const input = fs.readFileSync('/dev/stdin').toString().split(' ');

var a = parseInt(input[0])
var b = parseInt(input[1])
var c = parseInt(input[2])

console.log((a+b)%c)
console.log(((a%c)+(b%c))%c)
console.log((a*b)%c)
console.log(((a%c)*(b%c))%c)