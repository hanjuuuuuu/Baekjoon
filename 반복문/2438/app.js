//첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
var fs = require('fs')
var input = fs.readFileSync('./반복문/2438/input.txt').toString().trim();
//var input = fs.readFileSync('/dev/stdin').toString().trim();
let star= '';
for(let i = 0; i < input; i++){
    star+='*';
    console.log(star)
}