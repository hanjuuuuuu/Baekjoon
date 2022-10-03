// 오른쪽을 기준으로 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제
var fs = require('fs')
var input = fs.readFileSync('./반복문/2439/input.txt').toString().trim();
//var input = fs.readFileSync('/dev/stdin').toString().trim();
let num = parseInt(input);
let star = '';
let blank ='';
for(let i=1; i<=num; i++){
    for(let j=input-i; j>0; j--){
        blank += ' ';
    }
    star += '*';
    console.log(blank+star);
    blank = '';
}