//X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. 
const fs = require("fs")
const input = fs.readFileSync('./반복문/10871/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
var num = input[0].split(' ');
var test = parseInt(num[0]);    //정수 개수     
var compare = parseInt(num[1]); //비교 기준 수
var check = input[1].split(' ');    //비교 기준 수보다 작은지 확인하는 수
var result = '';         //작은 수를 담을 변수

for(let i=0; i<test; i++){
    if(parseInt(check[i]) < compare){
        result += check[i] + ' ';
    }
}
console.log(result);
