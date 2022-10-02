const fs = require("fs")
//const input = fs.readFileSync('./조건문/2884/input.txt').toString().split(' ');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = parseInt(input[0])
const b = parseInt(input[1])

if(b>=45){
    console.log(a, b-45)
}
else{
    if(a<1){
        console.log(23, b+15)
    }else{
    console.log(a-1, b+15)
    }
}