const fs = require("fs")
const input = fs.readFileSync('./함수/1065/input.txt').toString();
//const input = fs.readFileSync('/dev/stdin').toString();

var count = 0;
//한자리수, 두자리수는 모두 한수. 세자리수&1000이 한수인지 확인(1000은 한수 아님)
function  arithmetic(n){
    if(n<100){
        return n;
    }
    else{
        for(let i=100; i<=n; i++){
            var one = i%10;     //일의 자리 수
            var ten = Math.floor((i/10)%10);    //십의 자리 수
            var hundred = Math.floor(i/100);     //백의 자리 수
        
            if((hundred-ten) === (ten-one)){
                count++;
            }
        }
        return 99 + count;
    }
}

console.log(parseInt(arithmetic(input)));
