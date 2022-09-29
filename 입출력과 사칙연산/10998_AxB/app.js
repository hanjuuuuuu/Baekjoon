var fs = require("fs")
var input = fs.readFileSync('./입출력과 사칙연산/10998_AxB/input.txt').toString().split(' ');

//제출용
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a*b);