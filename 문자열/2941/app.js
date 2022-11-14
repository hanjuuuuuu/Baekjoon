//크로아티아 알파벳의 개수를 세는 문제
const fs = require("fs")
const input = fs.readFileSync('./문자열/2941/input.txt').toString().trim();
//const input = fs.readFileSync('/dev/stdin').toString().trim();

answer=[];
let croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
for (let i of croatia){
    answer = input.replace(i, 'o');
    if(answer != input){
        input = input.replace(i, 'o');
    }
    console.log(answer);
}
console.log(answer.length);