function stringy(size) {
  let answer = "";
  for (let i = 0; i < size; i++) {
    answer += i % 2 ? 0 : 1;
  }
  return answer;
}
