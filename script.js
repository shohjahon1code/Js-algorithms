const arr = [1, 3, 5, 7, 6, 75];

// let answer = 0;
// for (let i = 0; i < arr.length; i++) {
//   const array = arr[i];
//   answer += array;
// }
// console.log(answer);

let answer = 0;
arr.forEach((arr) => {
  if (arr % 2 === 1) {
    answer++;
  }
});
console.log(answer);
