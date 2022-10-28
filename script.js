let age = +prompt("Iltimos yoshingizni kiriting!");

if (isNaN(age)) {
  alert("Brat iltimos raqam kiriting");
} else if (age > 0 && age <= 18) {
  console.log("Hali yosh ekansiz Dustim!");
} else if (age > 18 && age <= 50) {
  console.log("O'rta yoshsiz");
} else if (age > 50 && age <= 59) {
  console.log("Pensiya yaqinda chiqasiz");
} else if (age > 59 && age <= 100) {
  console.log("Nafaqa xur ekansiz");
} else {
  console.log("Ajoyib yoshda ekansiz " + age);
}
