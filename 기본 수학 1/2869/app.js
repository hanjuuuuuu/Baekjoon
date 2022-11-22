//달팽이의 움직임을 계산하는 문제
const fs = require("fs")
const input = fs.readFileSync('./기본 수학 1/2869/input.txt').toString().trim().split(' ');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const up = input[0]-input[1];

let day = 0;
let sum = 0;
while(input[2]>sum){
    if(sum+input[0] >= input[2]){
        console.log('end');
        
    }
    else{
        sum+= up;
        day++;
        console.log(day);
    }
}
console.log('답',day);