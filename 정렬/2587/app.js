const fs = require('fs')
const input = fs.readFileSync('./정렬/2587/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let sum = 0;
for(let i=0; i<input.length; i++){
    sum += Number(input[i]); 
}

const sorted = input.sort((a,b) => a-b);

console.log(hap/input.length)
console.log(sorted[2]);
