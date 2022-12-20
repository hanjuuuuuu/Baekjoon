//행렬을 2차원 배열로 만들어 더하는 문제
const fs = require("fs")
const input = fs.readFileSync('./2차원 배열/2738/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0][0]);
const M = parseInt(input[0][2]);
let A = [N+1][M+1];         //행렬 A
let B = [N+1][M+1];        //행렬 B

for(let i=1; i<=N; i++){     //행렬 A입력
    for(let k=0; k<M; k+=2){
        A[i][k].push(input[i][k]);
    }
}

for(let i=1; i<=N; i++){     //행렬 B입력
    for(let k=0; k<M; k+=2){
        B[i][k].push(input[i+N][k])
    }
}

for(let i=0; i<N; i++){
    for(let k=0; k<M; k++){
        console.log(A[i][k] + B[i][k]);
    }
    console.log('\n');
}