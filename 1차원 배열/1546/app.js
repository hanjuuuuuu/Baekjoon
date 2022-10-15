//새로운 평균을 출력한다.
var fs = require('fs')
var input = fs.readFileSync('./1차원 배열/1546/input.txt').toString().trim().split('\n');
//var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(el => Number(el));   

var subject = input[0];
var score = input[1].split(' ').map(el => Number(el)); //점수를 배열로 저장
var max = Math.max(...score);   //최댓값 구하기
var newScore = score.map
console.log(score)
for(let i=1; i<input.length; i++){  //최댓값 구하기
    if(max < input[i]){
        max = input[i];
    }
}
for(let j=0; j<input.length; j++){
    var newAvg= input[j]/max*100;
}


