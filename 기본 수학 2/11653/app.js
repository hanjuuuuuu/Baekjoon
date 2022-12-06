//N을 소인수분해하는 문제
const fs = require('fs')
const input = fs.readFileSync('./기본 수학 2/11653/input.txt').toString().trim();
//const input = fs.readFileSync('/dev/stdin').toString().trim();

//소인수분해: 1보다 큰 자연수를 소인수(소수인 인수)들만의 곱으로 나타내는 것 
let N = parseInt(input);
let prime = [];     //소인수를 담을 배열
let count = 2;      //나눌 수

while(true){
    if(N % count == 0){
        prime.push(count);
        N = N/count;
        count = 1;      //count를 1로 초기화
    } 
    if(N === 1){
        break;
    }
    count++;
}
for(let i=0; i<prime.length; i++){
    console.log(prime[i]);
}
