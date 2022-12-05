//2부터 X-1까지 모두 나눠서 X가 소수인지 판별하는 문제 2
const fs = require('fs')
const input = fs.readFileSync('./기본 수학 2/2581/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const M = parseInt(input[0]);
const N = parseInt(input[1]);
let sum = 0;        //소수의 합
let min = -1;        //소수 최솟값
for(let i=N; i>=M; i--){    //m이상 n이하의 자연수 중 소수 판별
    let div = Math.floor(Math.sqrt(i));
    let noprime = 0;      //소수 판별 변수
    if(i===1){      //1은 소수가 아니므로 판별 통과
        continue;
    }
    for(let j=2; j<=div; j++){
        if(i%j === 0 || i===1){          //소수가 아니므로 반복문 탈출
            noprime++;
            break;
        }
    }
    if(noprime === 0){      //소수이므로 합을 더하고 최솟값 대입
        sum += i;
        min = i;
    }
}
if(sum !== 0){
    console.log(sum);
}
console.log(min);