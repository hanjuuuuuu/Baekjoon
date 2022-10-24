//입력으로 주어진 글자의 아스키 코드 값을 출력한다.
const fs = require("fs")
const input = fs.readFileSync('./문자열/11654/input.txt').toString();
//const input = fs.readFileSync('/dev/stdin').toString();

const ascii = input.charCodeAt(0);
console.log(ascii);