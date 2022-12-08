//소수 응용 문제 1
const fs = require('fs')
const input = fs.readFileSync('./기본 수학 2/4948/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let primeList = [];
for(let i=0; i<input.length; i++){
    let n = parseInt(input[i]);
    let prime = 0;

    if(n === 0) break;

    for(let j=2; j<=2*n; j++){          //2부터 2n까지 소수로 설정
        primeList[j] = true;
    }
    for(let k=2; k*k<=2*n; k++){        //배수를 소수가 아닌수로 설정
        if(primeList[k]){
            for(let h=k*k; h<=2*n; h+=k){       
                primeList[h] = false;
            }
        }
    }
    for(let t=n+1; t<=2*n; t++){
        if(primeList[t]){
            prime++;
        }
    }
    console.log(prime);
}