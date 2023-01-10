//행렬을 2차원 배열로 만들어 더하는 문제
const fs = require("fs")
const input = fs.readFileSync('./2차원 배열/2738/input.txt').toString().trim().split('\n').map((x)=>x.trim().split(' ').map((x)=> x));
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map((x)=>x.trim().split(' ').map((x)=> x));

const [row, column] = input.shift();

var answer = Array.from(new Array(column), () => new Array(row).fill(0)); //2차원배열 A
//console.log(answer)

for(let i=0; i<Number(row); i++){
    console.log('here',(Number(i) + Number(row)))
    for(let j=0; j<Number(column); j++){
        //console.log('here',input[i][j], input[i+row][j])
        console.log('j',j);
        answer[i][j] =(Number(input[i][j]) + Number(input[(Number(i) + Number(row))][j]));
        console.log('answer',answer[i][j]);
    }
}

let array = "";
for (let i=0; i < row; i++) {
    for (let j=0; j < column; j++) {
        array += answer[i][j].toString() + " ";
    }
    array += "\n";
}
console.log(array);