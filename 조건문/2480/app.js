const fs = require("fs")
const input = fs.readFileSync('./2480/input.txt').toString().split(' ');
//const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = parseInt(input[0])
const b = parseInt(input[1])
const c = parseInt(input[2])

if(a===b && b===c){
    console.log(10000+a*1000)
}
else if(a!==b && b!==c && a!==c){
    console.log(Math.max(a,b,c)*100)
}
else{
    if(a===b || a===c){
        console.log(1000+a*100)
    }
    else{
        console.log(1000+b*100)
    }
}