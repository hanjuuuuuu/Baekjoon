//크로아티아 알파벳의 개수를 세는 문제
const fs = require("fs")
const input = fs.readFileSync('./문자열/2941/input.txt').toString().trim();
//const input = fs.readFileSync('/dev/stdin').toString().trim();

let answer=input;
let croatia = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']

const check = function(answer){
    for(let j=0; j<croatia.length; j++){
        if(answer.includes(croatia[j])){
            answer = answer.replace(croatia[j], '.');
            j--;
        }
    }
    return answer.length;
}
console.log(check(answer));