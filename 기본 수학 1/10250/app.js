//호텔 방 번호의 규칙을 찾아 출력하는 문제
const fs = require("fs")
const input = fs.readFileSync('./기본 수학 1/10250/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = input[0];     //테스트 개수
for(let i=1; i<=T; i++){
    const [height, width, count] = input[i].split(' ');
    let share = Math.floor(count/height);      //몫
    let remainder = count%height;          //나머지
    if(parseInt(remainder) == 0){
        share -= 1;
        remainder = height;
    }
    const room = remainder*100 + share+1;
    console.log(room);
}

