//구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하는지 검사해보자.
var fs = require("fs")
var input = fs.readFileSync('./반복문/25304/input.txt').toString().trim().split('\n');
//var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

var receipt = parseInt(input[0])    //영수증 총 금액
var num = parseInt(input[1])    //영수증 물건 종류의 수
var result = parseInt(0)
for(let i = 2 ; i < num+2; i++){
    let [price,n] = input[i].split(' ');
    result += parseInt(price*n)
}

if(receipt === result){
    console.log('Yes')
}
else{
    console.log('No')
}