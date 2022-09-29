const fs = require("fs")
var input = fs.readFileSync('./입출력과 사칙연산/3003_king/input.txt').toString().split(' ');
//const input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0])
var b = parseInt(input[1])
var c = parseInt(input[2])
var d = parseInt(input[3])
var e = parseInt(input[4])
var f = parseInt(input[5])
console.log(1-a, 1-b, 2-c, 2-d, 2-e, 8-f)