//각 문자를 반복하여 출력하는 문제
const fs = require("fs")
const input = fs.readFileSync('./문자열/2675/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i=1; i<=input[0]; i++){  //테스트 케이스 수만큼 반복
    var [R, S] = input[i].split(' ');
    var answer = '';
    for(let j=0; j<S.length; j++){     //문자열 S를 반복 횟수 R만큼 반복
        answer += S[j].repeat(R);
    }
    console.log(answer);
}