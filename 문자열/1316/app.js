//조건에 맞는 문자열을 찾는 문제
const { group } = require("console");
const fs = require("fs")
const input = fs.readFileSync('./문자열/1316/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

var N = input[0];       //단어의 개수
var groupword = input[0];      //그룹 단어 수

for(let i=1; i<=N; i++){     //단어의 개수만큼 반복
    let word = input[i];       //happy
    let check = [];     
    for(let j=0; j<word.length; j++){   //그룹 단어인지 확인하는 단어의 길이만큼 반복
        if(!check.includes(input[i][j])){    //check에 문자가 없다면 추가
            check.push(input[i][j]);
        }
        else{       //check에 문자가 있다면(나왔던 문자라면) 바로 전에 이어진 문자인지 확인
            if(input[i][j] != input[i][j-1]){
                groupword--;
                break;
            }
        }
    }
}

console.log(groupword);
