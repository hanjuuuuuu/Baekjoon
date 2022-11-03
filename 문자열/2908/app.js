//숫자를 뒤집어서 비교하는 문제
const fs = require("fs")
const input = fs.readFileSync('./문자열/2908/input.txt').toString().trim().split(' ');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');


// if(input[0][2] != input[1][2]){
//     console.log(input[0][2]>input[1][2] ? input[0][2] : input[1][2]);
// }
// else{   //일의 자리 수가 같은 경우
//     if(input[0][1] != input[1][1]){
//         console.log(input[0][1]>input[1][1] ? input[0][1] : input[1][1]);
//     }
// }

var one = ''
var two = ''
for(let i=2; i>=0; i--){
    one += input[0][i];
    two += input[1][i];
}
console.log(one>two ? one : two);
