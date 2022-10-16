//OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.
var fs = require('fs')
var input = fs.readFileSync('./1차원 배열/8958/input.txt').toString().trim().split('\n');
//var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   

var num = input[0];     //테스트 케이스 개수

//if문으로 만약 o이면, 그전도 o이면 count++ 아니면
for(let i=1; i<=num; i++){
    //새로운 줄에 가면 초기화해준다.
    let count = 0;
    let sum = 0;

    for(let j=0; j<input[i].length; j++){
        if(input[i][j] === 'O'){
            count++;
        }
        else{
            count = 0;
        }
        sum += count;
    }
    console.log(sum);
}