const fs = require("fs");
const input = fs.readFileSync('./문자열/11720/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

var hap = 0;
for(let i=0; i<input[0]; i++){
    hap += parseInt(input[1][i]);
}
console.log(hap);