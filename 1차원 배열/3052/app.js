//42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.
var fs = require('fs')
var input = fs.readFileSync('./1차원 배열/3052/input.txt').toString().trim().split('\n').map(Number);
//var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);   

const result = input.map((input) => input%42);

// 중복제거
const set = new Set(result);
console.log(set.length());