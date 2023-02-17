const fs = require('fs');
const input = fs.readFileSync('./정렬/18870/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();    //N개의 좌표

let array = input[0].split(' ').map(x=>x);  //좌표를 배열에 저장

//정렬 후 중복제거하고 인덱스 확인하기
array.sort((a,b)=> {
    return a-b;
});

var uniqueArray = [...new Set(array)];

let answer = '';
for(let i=0; i<N; i++){
    answer += uniqueArray.indexOf(input[0].split(' ')[i]) + ' ';
}
console.log(answer)