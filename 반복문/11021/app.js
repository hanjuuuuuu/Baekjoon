//각 테스트 케이스마다 "Case #x: "를 출력한 다음, A+B를 출력한다.
var fs = require('fs')
var input = fs.readFileSync('./반복문/11021/input.txt').toString().trim().split('\n');
//var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
var a = parseInt(input[0])  //테스트 케이스 개수

for(let i = 1; i < a+1; i++){
    let number = input[i].split(' ')
    console.log('Case #'+i+": "+ (parseInt(number[0])+parseInt(number[1])))
}