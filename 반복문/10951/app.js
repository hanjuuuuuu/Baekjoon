//입력이 끝날 때까지 A+B를 출력.
var fs = require('fs')
var input = fs.readFileSync('./반복문/10951/input.txt').toString().trim().split('\n');
//var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let i = 0;
while(true){
    try{
        let num = input[i].split(' ');  //공백분리
        console.log(parseInt(num[0])+parseInt(num[1]))
        i++;
    } catch{
        break;
    }
}