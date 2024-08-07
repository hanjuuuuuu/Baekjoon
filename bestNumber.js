function solution(numbers) {
  var answer = numbers
    .map((number) => number.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] == 0 ? "0" : answer;
}

solution([6, 10, 2]);
