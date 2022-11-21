//벌집이 형성되는 규칙에 따라 벌집의 위치를 구하는 문제
const fs = require("fs")
const input = fs.readFileSync('./기본 수학 1/2292/input.txt').toString().trim();
//const input = fs.readFileSync('/dev/stdin').toString().trim();

var sum=1;
var count=1;
while(input>sum){
    sum += 6 * count;
    count++;
}
console.log(count);