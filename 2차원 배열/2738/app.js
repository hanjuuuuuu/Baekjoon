//행렬을 2차원 배열로 만들어 더하는 문제
const fs = require("fs")
const input = fs.readFileSync('./2차원 배열/2738/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const row = parseInt(input[0][0]);
const column = parseInt(input[0][2]);
const A = Array.from(new Array(column), () => new Array(row).fill(0));         //행렬 A
const B = Array.from(new Array(column), () => new Array(row).fill(0));        //행렬 B


for(let i=1; i<=row; i++){     //행렬 A입력
    for(let k=0; k<column; k+=2){
        A.push(input[i][k]);
    }
}

for(let i=1; i<=row; i++){     //행렬 B입력
    for(let k=0; k<column; k+=2){
        B.push(input[i+row][k])
    }
}

for(let i=1; i<=row; i++){
    for(let k=0; k<column; k++){
        console.log(A[i][k] + B[i][k]);
    }
    console.log('\n');
}