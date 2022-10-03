//원래 수로 돌아올 때까지 연산을 반복하는 문제
var fs = require('fs')
var input = fs.readFileSync('./반복문/1110/input.txt').toString().trim();
//var input = fs.readFileSync('/dev/stdin').toString().trim();
var n = parseInt(input);
var i = 0; 
if(n<10){
    var a = 0;
    var b = parseInt(input);
} else{
    var a = parseInt(input[0]); 
    var b = parseInt(input[1]);  
}
while(true){
    var hap = (a+b)%10;     
    a=b;        
    b=hap;      
    i++;
    if(n == parseInt(a+''+b)){
        console.log(i);
        break;
    }
}

//다른 방법
// var num = n;
// while(true){
//     var hap = parseInt(num%10 + num/10);
//     num = (num%10)*10 + hap%10;
//     i++;
//     if(num == n)
//         break;
// }