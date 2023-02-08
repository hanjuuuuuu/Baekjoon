const fs = require('fs');
const input = fs.readFileSync('./정렬/18870/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();    //N개의 좌표

const array = [];
for(let i=0; i<N; i++){
    array.push(input[0].split(' ')[i])
}

console.log(array)

//반복문 돌면서 작은 수 배열에 넣고 배열의 중복값없애기 => 개수를 답 배열에 넣기
