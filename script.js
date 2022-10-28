// O'rta qiymat aniqlash algorithmi

let num = +prompt("Son kiriting");
let num2 = +prompt("yana Son kiriting");
let num3 = +prompt("Yana Son kiriting");
if (isNaN(num) || isNaN(num2) || isNaN(num3)) {
  console.log("Raqam kiriting iltimos!");
}
if (num < num2 || num > num3 || num > num2 || num < num3) {
  console.log("O'rta qiymat " + num2);
}
