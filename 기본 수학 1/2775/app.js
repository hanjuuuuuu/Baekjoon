//층과 거주자 수의 규칙을 찾는 문제
const fs = require("fs")
const input = fs.readFileSync('./기본 수학 1/2775/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = input[0]; //테스트 케이스 수
for(let i=1; i<T*2; i+=2){
    let k = input[i];       //k층
    let n = input[i+1];      //n호
    console.log(floor(k,n));
}

function floor(k,n){
    if(parseInt(k) == 0){
        return n;
    } else if(parseInt(n) == 0) {
        return 0;
    } else {
        return parseInt(floor(k,n-1)) + parseInt(floor(k-1,n));
    }
}