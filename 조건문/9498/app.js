const fs = require("fs")
//const input = fs.readFileSync('./조건문/9498/input.txt').toString().trim();
const input = fs.readFileSync('/dev/stdin').toString().trim();
const a = parseInt(input)
if(a>=90){
    console.log('A')
}else if(a>=80){
    console.log('B')
}else if(a>=70){
    console.log('C')
}else if(a>=60){
    console.log('D')
}else{
    console.log('F')
}