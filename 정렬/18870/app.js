const fs = require('fs');
const input = fs.readFileSync('./정렬/18870/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();    //N개의 좌표

let array = input[0].split(' ').map(x=>x);  //좌표를 배열에 저장

//중복제거하고 정렬 후 인덱스 확인하기
let set = new Set(array);
let uniqueArray = [...set].sort((a,b) => a - b);

let dic = {};
uniqueArray.forEach((item, index) => {dic[item] = index});

let answer = '';
for(let i=0; i<N; i++){
    answer+=dic[array[i]] + ' ';
}
console.log(answer)