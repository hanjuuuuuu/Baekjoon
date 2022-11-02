//주어진 단어에서 가장 많이 사용된 알파벳을 출력하는 문제
const fs = require("fs")
//대문자로 변경
const input = fs.readFileSync('./문자열/1157/input.txt').toString().toUpperCase();
//const input = fs.readFileSync('/dev/stdin').toString().toUpperCase();

let count= new Array(26).fill(0);   //26길이만큼 0으로 배열 초기화
for(let i=0; i<input.length; i++){  //count에 나온 알파벳 수만큼 추가
    count[input.charCodeAt(i)-65]++;
}

var max = Math.max(...count);       //count배열에서 가장 큰 값
var index = count.indexOf(max);     //count배열에서 가장 큰 값의 처음 인덱스

let own = true;       //max값이 2개 이상인지 확인
for(let j=0; j<26; j++){    
    if(count[j] === max && j !== index){
        own = false;
    }
}

if(own == true){
    console.log(String.fromCharCode(index+65));
}
else{
    console.log('?');
}


