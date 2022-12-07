//더 빠르게 소수를 판별하는 문제
const fs = require('fs')
const input = fs.readFileSync('./기본 수학 2/1929/input.txt').toString().trim().split(' ');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const M = parseInt(input[0]);
const N = parseInt(input[1]);
let primeList = [];

//2이상 N이하를 소수로 설정
for(let i=2; i<=N; i++){
    primeList[i] = true;
}

for(let j=2; j*j<=N; j++){
    if(primeList[j]){
        for(let k= j*j; k<=N; k+=j){        //배수를 소수가 아니라고 지정
            primeList[k] = false;
        }
    }
}
for(let h=M; h<=N; h++){
    if(primeList[h]){
        console.log(h);
    }
}