var fs = require("fs")
//테스트용
var input = fs.readFileSync('./입출력과 사칙연산/1001_A-B/input.txt').toString().split(' ');
//제출용
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a-b);