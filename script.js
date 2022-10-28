//Son kiritamiz agar kiritgan qiymatimiz number bolmasa consolega raqam kiriting so'zini chiqaramiz
// Agar kiritgan sonimizni juft yoki toqligini aniqlaymiz

let num = +prompt("Son kiriting!");

if (isNaN(num)) {
  console.log("Raqam kiriting iltimos!");
} else if (num % 2 == 0) {
  console.log("Bu juft son");
} else {
  console.log("Bu toq sonku");
}
