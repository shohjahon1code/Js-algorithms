// sonni darajaga kutarish algorithmi!!!

do {
  let num = parseInt(prompt("Enter the number!"));
  let degr = parseInt(prompt("Enter the degree!"));

  if (isNaN(num) || isNaN(degr) || num === 0 || degr === 0) {
    parseInt(prompt("Enter the number!"));
    parseInt(prompt("Enter the degree!"));
  }

  alert(num ** degr);
} while (Infinity);

// ikkinchi usuli

let number = +prompt("Enter the number!");
let level = +prompt("Enter the level!");

let answer = 1;

for (let i = 0; i < level; i++) {
  answer = answer * number;
}
console.log(answer);
