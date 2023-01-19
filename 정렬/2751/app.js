const fs = require('fs')
const input = fs.readFileSync('./정렬/2751/input.txt').toString().trim().split('\n').map((x)=>Number(x));
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();        //N개의 수

const sorted = input.sort((a,b)=> a-b);
// for(let i=0; i<N; i++){
//     console.log(sorted[i]);
// }
console.log(input.join('\n'))