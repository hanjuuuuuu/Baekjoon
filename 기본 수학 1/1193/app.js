//분수의 순서에서 규칙을 찾는 문제
const fs = require("fs")
const input = fs.readFileSync('./기본 수학 1/1193/input.txt').toString().trim();
//const input = fs.readFileSync('/dev/stdin').toString().trim();

var sum=0;
var i=0;
while(input > sum){
    i++;
    sum += i;
}
var up = i - (sum - input);
var down = 1 + (sum - input);
if(i%2 == 1){       //i가 홀수이면
    console.log(down+'/'+up);
}
else if(i%2 == 0){   //i가 짝수이면
    console.log(up+'/'+down);
}