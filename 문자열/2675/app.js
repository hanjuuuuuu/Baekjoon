const fs = require("fs")
const input = fs.readFileSync('./문자열/2675/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=1; i<=input[0]; i++){  //테스트 케이스 수만큼 반복
    var R = input[i].split('');
    var answer = '';
    for(let j=1; j<=R[0]; j++){     //반복 횟수 R만큼 반복
        answer += R[j+1];
        console.log(answer);
    }
}