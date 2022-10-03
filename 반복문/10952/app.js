//0 0이 들어올때까지 A+B를 출력.
var fs = require('fs')
var input = fs.readFileSync('./반복문/10952/input.txt').toString().trim().split('\n');
//var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let i = 0;
while(true){
    let num = input[i].split(' ');  //공백분리
    let a = parseInt(num[0]);
    let b = parseInt(num[1]);
    if(a==0 && b ==0){
        break;
    }
    console.log(a+b);
    i++;
}