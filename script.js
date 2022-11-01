function getRandomInteger(max = 100, min = 0) {
  return Math.floor(Math.random() * max + 1 - min) + min;
}

let num = +prompt("Nechta misol yechmoqchisiz?");
while (isNaN(num)) {
  num = +prompt("Qaytadan kiriting son kiritmadingiz!");
}
let max = +prompt("Maximal sonni kiriting?");
while (isNaN(max)) {
  max = +prompt("Qaytadan kiriting siz son kiritmadingiz!");
}
let min = +prompt("Minimal sonni kiriting?");
while (isNaN(min) || min > max) {
  min = +prompt("Qaytadan kiriting!");
}

for (let i = 1; i <= num; i++) {
  let num1 = getRandomInteger(max, min);
  let num2 = getRandomInteger(max, min);

  let answer = +prompt(`Misol N${i}: ${num1} + ${num2} = ?`);
  let general = num1 + num2;
  if (answer == general) {
    alert("Javobingiz togri");
  } else {
    alert("Javobingiz notogri");
  }
}

function getColor() {
  let r = getRandomInteger(255, 0);
  let g = getRandomInteger(255, 0);
  let b = getRandomInteger(255, 0);

  return `rgb(${r}, ${g}, ${b})`;
}

document.body.style.transition = "1s";
setInterval(() => (document.body.style.background = getColor()), 1000);
