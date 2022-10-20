var selfnumber = [];

function d(n) {
    let number = n;
    let hap = 0;
    for(let i=0; i<String(n).length; i++){      //각 자리수 더해서 hap에 저장
        hap += number % 10;     
        number = Math.floor(number / 10);
    }
    return n + hap;
}

    //d(n)을 배열로 저장한 후, 배열에 없는 값을 출력한다.
    for(let j=1 ; j<=10000; j++){
        selfnumber.push(d(j));
        if(!selfnumber.includes(j)){
            console.log(j);
        }
    }

