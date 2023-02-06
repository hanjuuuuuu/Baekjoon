const fs = require('fs');
const input = fs.readFileSync('./정렬/18870/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();    //N개의 좌표