//n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

var fs = require("fs")
//var input = fs.readFileSync('./반복문/8393/input.txt').toString().trim();
var input = fs.readFileSync('/dev/stdin').toString().trim();

var a = parseInt(input)
var result = parseInt(0)
for(let i = 1; i <= a; i++){
    result += i
}
console.log(result)