const fs = require("fs")
const input = fs.readFileSync('./조건문/2525/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const a = parseInt(input[0].split(' ')[0])
const b = parseInt(input[0].split(' ')[1])
const c = parseInt(input[1])
const d = parseInt((b+c)/60)
const e = parseInt((b+c)%60)

if(b+c<60){
    console.log(a, b+c)
}
else{
    if(a+d>=24){
        console.log(a+d-24, e)
    }
    else{
        console.log(a+d, (b+c)%60)
    }
}