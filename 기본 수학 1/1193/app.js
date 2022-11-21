//분수의 순서에서 규칙을 찾는 문제
const fs = require("fs")
const input = fs.readFileSync('./기본 수학 1/1193/input.txt').toString().trim();
//const input = fs.readFileSync('/dev/stdin').toString().trim();

var sum=0;
var i=1;
while(input > sum){
    sum += i;
    console.log(i, sum);
    i++;
}
if(i%2 == 1){       //i가 홀수이면

}