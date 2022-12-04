//2부터 X-1까지 모두 나눠서 X가 소수인지 판별하는 문제 1
const fs = require('fs')
const input = fs.readFileSync('./기본 수학 2/1978/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input[0];     //주어진 수 N개
const num = input[1].trim().split(' ');       //소수인지 확인할 수
let prime = 0;      //소수의 개수
for(let i=0; i<N; i++){
    let count = 2;

    while(parseInt(num[i])>=2){
        // if(parseInt(num[i]) === 1){         //1이면 소수가 아니다.
        //     break;
        // }
        if(count === parseInt(num[i])){
            prime++;
            break;
        }
        if(parseInt(num[i])%count === 0){
            break;
        }
        count++;
    }
}
console.log(prime);