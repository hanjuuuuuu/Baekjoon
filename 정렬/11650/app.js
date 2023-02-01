const fs = require('fs')
const input = fs.readFileSync('./정렬/11650/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();        //N개의 수

input.sort((a,b)=> {
    if (a.split(' ')[0] === b.split(' ')[0])
        return a.split(' ')[1] - b.split(' ')[1];
    else
        return a.split(' ')[0] - b.split(' ')[0];
})

console.log(input.join('\n')); 