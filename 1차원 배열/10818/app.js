//첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.
var fs = require('fs')
var input = fs.readFileSync('./1차원 배열/10818/input.txt').toString().trim().split('\n');
//var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var n = parseInt(input[0])      //정수 n개
const num = input[1].split(' ').map(Number);

let max = num[0];
let min = num[0];

for(let i=0; i<n; i++){
    if(max < num[i]){
        max = num[i];
    }
    if(min > num[i]){
        min = num[i];
    }
}
console.log(min, max);