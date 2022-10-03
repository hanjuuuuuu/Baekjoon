//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
var fs = require('fs')
var input = fs.readFileSync('./반복문/11022/input.txt').toString().trim().split('\n')
//var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
for(let i = 1; i<=input[0]; i++){
    let number = input[i].split(' ')    //공백으로 분리
    let a = parseInt(number[0])
    let b = parseInt(number[1])
    console.log('Case #'+i+': '+a+' + '+b+' = '+(a+b))
}