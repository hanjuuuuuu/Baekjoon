//호텔 방 번호의 규칙을 찾아 출력하는 문제
const fs = require("fs")
const input = fs.readFileSync('./기본 수학 1/10250/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(input[0],input[1][0], input[2][1])

const T = input[0];     //테스트 개수
for (i = 1; i <= T; i++) {
    let tmp = input[i].split(" ").map(Number);
    let H = tmp[0];
    let W = tmp[1];
    let N = tmp[2];

    num = 0;
    num = parseInt(Math.ceil(N / H)); 

    if (N % H === 0) {
      num += H * 100; 
    } else {
      num += (N % H) * 100; 
    }
    result += num + "\n";
    }

    console.log(result);