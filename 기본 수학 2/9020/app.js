//소수 응용 문제 2
const fs = require('fs')
const input = fs.readFileSync('./기본 수학 2/9020/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let primeList = [];
let isPrime = [];
const T = input[0];     //테스트 케이스 수
let n = 0;
for(let i=1; i<=T; i++){
    n = parseInt(input[i]);

    for(let j=2; j<=n; j++){          //2부터 n까지 소수로 설정
        primeList[j] = true;
    }
    for(let k=2; k*k<=n; k++){        //배수를 소수가 아닌수로 설정
        if(primeList[k]){
            for(let h=k*k; h<=n; h+=k){       
                primeList[h] = false;
            }
        }
    }
    for(let t=2; t<=n; t++){
        if(primeList[t]){
            isPrime.push(t);    //소수만 담아두기
        }
    }
    for(let z=isPrime.length/2; z<isPrime.length; z++){
        if(isPrime[n-isPrime[z]]){
            console.log(isPrime[z])
        }
    }
}