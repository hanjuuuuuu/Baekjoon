const fs = require("fs")
const input = fs.readFileSync('./조건문/2525/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const a = parseInt(input[0].split(' ')[0])
const b = parseInt(input[0].split(' ')[1])
const c = parseInt(input[1])

// if(b+c<60){
//     console.log(a, b+c)
// }
// else{
//     console.log(a+(b+c)/60, (b+c)%60)
//     if(a+(b+c)/60>24){
//         console.log(a+(b+c)/60-24, (b+c)%60)
//     }
// }