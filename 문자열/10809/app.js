const fs = require("fs")
const input = fs.readFileSync('./문자열/10809/input.txt').toString().trim();
//const input = fs.readFileSync('/dev/stdin').toString().trim();

//a부터 z까지 반복하면서 input에 알파벳이 존재하면 해당 인덱스를 alphabet에 추가한다.
let alphabet = '';
for(let i=97; i<123; i++){
    alphabet += input.indexOf(String.fromCharCode(i)) + ' ';
    //console.log(alphabet);
}
console.log(alphabet);