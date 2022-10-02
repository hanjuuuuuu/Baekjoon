const fs = require("fs")
const input = fs.readFileSync('./반복문/10950/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const a = parseInt(input[0])
for(let i = 1; i <= a; i++){
    //공백기준으로 분리
    let num = input[i].split(' ');
    //console.log(parseInt(input[i])+parseInt(input[i][1]))
    console.log(parseInt(num[0])+parseInt(num[1]))
}