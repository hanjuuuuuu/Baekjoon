const fs = require('fs')
const input = fs.readFileSync('./정렬/2108/input.txt').toString().trim().split('\n');
//const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);     //N개의 수
input.shift();
const sorted = input.sort((a,b) => a-b);    //오름차순으로 정렬
console.log(input)

// 산술평균: N개의 수들의 합을 N으로 나눈 값
function getAverage(array) {
    let sum = 0;
    for (let i=0; i<N; i++) {
        sum += Number(array[i]);
    }
    return Math.round(sum/N) === -0 ? 0 : Math.round(sum/N);
}

// 중앙값: N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값 
function getMedian(array) {
    const mid = Math.floor(N / 2);
    return array[mid];
}

// 최빈값 : N개의 수들 중 가장 많이 나타나는 값(여러 개 있을 때에는 최빈값 중 두 번째로 작은 값)
function getMode(array) {
    const map = new Map();
    for (let i = 0; i < N; i++) {   //(숫자, 숫자의 개수) 추가
        if(!map.has(array[i])) {
            map.set(array[i], 1);
        } else {
            map.set(array[i], map.get(array[i]) + 1);
        }
    }
    let maxValue = 0;
    let answer = [];
    map.forEach((element, key) => {     //많이 나온 수를 answer에 push
        //예제 3 다시 넣어보기
        if (maxValue < element) {
            maxValue = element;
            answer = [];
            answer.push(key);
        } else if (maxValue === map.get(key)) {
            answer.push(key);
        }
    });
    return answer.length !== 1 ? answer[1] : answer[0];
}

// 범위 : N개의 수들 중 최댓값과 최솟값의 차이
function getRange(array) {
    const min = array[0];
    const max = array[N-1];
    
    return max-min;
}

console.log(getAverage(sorted));
console.log(getMedian(sorted));
console.log(getMode(sorted));
console.log(getRange(sorted));