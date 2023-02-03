const fs = require('fs');
const input = fs.readFileSync('./정렬/10814/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = input.shift();        //회원의 수 N

input.sort((a,b) => {       //나이 순, 나이가 같으면 가입한 순으로 정렬
    if(a.split(' ')[0] === b.split(' ')[0])
        return 1;
    else
        return a.split(' ')[0] - b.split(' ')[0];
});

console.log(input.join('\n'));