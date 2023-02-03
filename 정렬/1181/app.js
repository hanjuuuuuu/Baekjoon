const fs = require('fs')
const input = fs.readFileSync('./정렬/1181/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();    //단어의 개수 N
const set = new Set(input);      //중복된 문자 제거
const array = [...set];
array.sort();           //사전 순으로 정렬
array.sort((a,b) => {       //길이가 짧은 것 부터 정렬
    return a.length - b.length
});
console.log(array.join('\n'));