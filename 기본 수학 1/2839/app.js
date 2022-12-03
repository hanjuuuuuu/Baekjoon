//5와 3을 최소 횟수로 합하여 N을 만드는 문제
const fs = require("fs")
const input = fs.readFileSync('./기본 수학 1/2839/input.txt').toString().trim();
//const input = fs.readFileSync('/dev/stdin').toString().trim();

let N = parseInt(input);     //설탕N킬로그램
let five = 0;
let three = 0;

while(true){
    if(N % 5 === 0){
        five = N / 5;
        console.log(five + three);
        break;
    } 
    if(N < 0){
        console.log(-1);
        break;
    }
    N -= 3;
    three++;
}
