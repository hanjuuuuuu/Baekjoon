//호텔 방 번호의 규칙을 찾아 출력하는 문제
const fs = require("fs")
const input = fs.readFileSync('./기본 수학 1/10250/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = input[0];     //테스트 개수
for(let i=1; i<=T; i++){
    const [height, width, count] = input[i].split(' ');
    let share = Math.floor(count/height);      //몫
    let remainder = count%height;          //나머지
    if(remainder === 0){
        share -= 1;
        remainder = height;
    }
    const front = remainder;      //방 번호의 앞부분
    const back= twolen(share);        //방 번호의 뒷부분
    const room = String(front)+String(back);
    console.log(room);
}

function twolen(n) {    //수를 두자리 수로 변환해서 호수 뒷부분을 리턴하는 함수
    return (n<10 ? '0': '') + parseInt(n+1);
}