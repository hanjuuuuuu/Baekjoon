//새로운 평균을 출력한다.
var fs = require('fs')
var input = fs.readFileSync('./1차원 배열/1546/input.txt').toString().trim().split('\n');
//var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');   

var subject = input[0];
var score = input[1].split(' ').map(el => Number(el)); //점수를 배열로 저장
var max = Math.max(...score);   //최댓값 구하기
var newScore = score.map(el => el/max*100);     //새로운 점수 저장

//평균 구하기
var avg = 0;
for(let i=0; i<subject; i++){  
    avg += newScore[i];
}
var newAvg= avg / subject;
console.log(newAvg);


