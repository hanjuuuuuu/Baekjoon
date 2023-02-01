const fs = require('fs')
const input = fs.readFileSync('./정렬/11651/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();    //점 N개

input.sort((a,b) => {
    if(a.split(' ')[1] === b.split(' ')[1])
        return a.split(' ')[0] - b.split(' ')[0]
    else
        return a.split(' ')[1] - b.split(' ')[1]
});

console.log(input.join('\n'));