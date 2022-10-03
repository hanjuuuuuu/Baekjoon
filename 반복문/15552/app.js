//각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.

var fs = require("fs")
var input = fs.readFileSync('./반복문/15552/input.txt').toString().trim().split('\n');
//var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var n = parseInt(input) //테스트케이스 개수
var answer= '';
for(let i = 1; i<n+1; i++){
    let num = input[i].split(' ')
    answer += parseInt(num[0])+parseInt(num[1])+'\n'
}
console.log(answer)