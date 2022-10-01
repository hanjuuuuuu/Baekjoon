const fs = require("fs")
//const input = fs.readFileSync('./조건문/2753/input.txt').toString().trim();
const input = fs.readFileSync('/dev/stdin').toString().trim();
const a = parseInt(input)
if(a%4==0 && a%100!=0 || a%400==0){
    console.log('1')
}else{
    console.log('0')
}
