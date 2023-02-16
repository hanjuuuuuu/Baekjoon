const fs = require('fs');
const input = fs.readFileSync('./정렬/18870/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();    //N개의 좌표

const array = [];
for(let i=0; i<N; i++){     //좌표를 배열에 저장
    array.push(input[0].split(' ')[i])
}
console.log(array)

//정렬 후 중복제거하고 인덱스 확인하기
array.sort((a,b)=> {
    return a-b;
});

var uniqueArray = [...new Set(array)];
console.log(uniqueArray)

for(let i=0; i<N; i++){
    console.log(uniqueArray.indexOf(input[0].split(' ')[i]) )
}
