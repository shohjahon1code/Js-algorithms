do {
  var son = +prompt("Enter the positive number!");

  let answer = 1;
  for (let i = 1; i <= son; i++) {
    answer *= i;
  }
  console.log(answer + " is the factorial of " + son);
} while (isNaN(son));
