//첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다.
var fs = require('fs')
var input = fs.readFileSync('./1차원 배열/2562/input.txt').toString().trim().split('\n').map(el => Number(el));
//var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   

let max = input[0];
let num = 0;

for(let i=1; i<input.length; i++){
    if(max < input[i]){
        max = input[i];
        num = i;
    }
}
console.log(max);
console.log(num+1);