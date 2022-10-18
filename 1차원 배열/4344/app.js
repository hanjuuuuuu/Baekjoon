//X보다 작은 수를 입력받은 순서대로 공백으로 구분해 출력한다. 
const fs = require("fs")
const input = fs.readFileSync('./1차원 배열/4344/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

var test = parseInt(input[0]);  //테스트 케이스 개수
for(let i=1; i<=test; i++){
    var num = input[i].split(' ');      //학생 수
    var sum = 0;
    var avg = 0;
    for(let j=1; j<=num[0]; j++){
        sum += parseInt(num[j]);
    }
    avg = sum / num[0];
    var count = 0;
    for(let k=1; k<=num[0]; k++){
        if(num[k]> avg){
            count++;
        }
        
    }
    console.log(((count/parseInt(num[0]))*100).toFixed(3) + '%')
}