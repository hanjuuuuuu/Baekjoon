const fs = require('fs')
const input = fs.readFileSync('./정렬/1427/input.txt').toString().trim();
//const input = fs.readFileSync('/dev/stdin').toString().trim();

var sorted=[];
for(let i=0; i<input.length; i++){
    sorted.push(input[i])
}
console.log(sorted.sort((a,b)=>b-a).join(''));
