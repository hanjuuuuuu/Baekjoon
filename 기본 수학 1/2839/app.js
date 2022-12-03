//5와 3을 최소 횟수로 합하여 N을 만드는 문제
const fs = require("fs")
const input = fs.readFileSync('./기본 수학 1/2839/input.txt').toString().trim();
//const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = input[0];     //설탕N킬로그램
let five = 0;
let three = 0;

while(N>0){
    if(N % 5 == 0){
        five = N / 5;
        console.log(five + three);
        break;
    } 
    N -=3;
    three++;
}