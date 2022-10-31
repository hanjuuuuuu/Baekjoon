//주어진 단어에서 가장 많이 사용된 알파벳을 출력하는 문제
const fs = require("fs")
const input = fs.readFileSync('./문자열/1157/input.txt').toString();
//const input = fs.readFileSync('/dev/stdin').toString();

let word = ''
for(let i=0; i<input.length; i++){
    word =input.toUpperCase();
}
//A부터 z까지 반복하면서 input에 알파벳이 존재하면 input의 해당 인덱스를 alphabet에 추가한다.
//존재하지 않으면 -1이다.
let alphabet = '';
for(let i=65; i<91; i++){
    alphabet += word.indexOf(String.fromCharCode(i)) + ' ';
}
console.log(alphabet);
