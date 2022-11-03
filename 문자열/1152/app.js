//단어의 개수를 구하는 문제
const fs = require("fs")
const input = fs.readFileSync('./문자열/1152/input.txt').toString().trim().split(' ');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

//빈 값일 때 0, 아닐 때 단어의 개수
console.log(input=="" ? 0 : input.length)
