//크로아티아 알파벳의 개수를 세는 문제
const fs = require("fs")
const input = fs.readFileSync('./문자열/2941/input.txt').toString().trim();
//let input = fs.readFileSync('/dev/stdin').toString().trim();

let answer=input;
let croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

const check = function(answer){
    for (let i of croatia){
        answer = answer.replace(i, '.');
    }
    console.log(answer)
    return answer.length;
}
console.log(check(answer));