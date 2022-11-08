//숫자를 뒤집어서 비교하는 문제
const fs = require("fs")
const input = fs.readFileSync('./문자열/2908/input.txt').toString().trim().split(' ');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

var one = ''
var two = ''
for(let i=2; i>=0; i--){    //숫자를 뒤집어서 저장한다.
    one += input[0][i];
    two += input[1][i];
}
console.log(one>two ? one : two);
