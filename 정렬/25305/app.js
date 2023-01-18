const fs = require('fs')
const input = fs.readFileSync('./정렬/25305/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input[0];  //응시자 수
const k = N.split(' ')[1];  //상을 받는 사람의 수
const x = input[1];     //각 학생의 점수

//내림차순으로 정렬
const sorted = x.split(' ').sort((a,b) => b-a);

console.log(sorted[k-1]);