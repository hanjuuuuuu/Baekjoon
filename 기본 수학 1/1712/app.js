//이익이 발생하는 지점을 찾는 문제
const fs = require("fs")
const input = fs.readFileSync('./기본 수학 1/1712/input.txt').toString().trim().split(' ');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);

if(B>=C){   //손익분기점이 존재하지 않을 경우
    console.log(-1);
}
else{       //손익분기점 계산
    console.log(Math.floor(A/(C-B))+1);
}