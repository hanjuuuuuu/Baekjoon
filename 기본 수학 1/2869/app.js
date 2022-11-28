//달팽이의 움직임을 계산하는 문제
const fs = require("fs")
const input = fs.readFileSync('./기본 수학 1/2869/input.txt').toString().trim().split(' ');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

var up = input[0];
var down = input[1];
var height = input[2];

console.log(Math.ceil((height-down)/(up-down)));
