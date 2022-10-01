"# Baekjoon" 

//입력이 한 개일 때 
const input = fs.readFileSync('/dev/stdin').toString().trim();

//공백으로 구분되어 있는 여러 개의 값들을 한 줄로 입력받을 때
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

//여러 줄을 입력받을 때
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

//첫 줄에 입력될 개수에 대한 N이 주어지고, 두 번째 줄에서 공백으로 구분된 
//N개의 입력 받을 때
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s*/);
const [n,...arr]=input;

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split(' ').map((el) => Number(el));