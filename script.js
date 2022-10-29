// juft yoki toqligini topish
let num = parseInt(prompt("Enter the number!"));

if (isNaN(num) || "") {
  do {
    alert("Son emasku bu");
    num = parseInt(prompt("Enter the number!"));
  } while (true);
} else {
  if (num % 2) {
    alert("Kiritgan soningiz toq son");
  } else {
    alert("Kiritgan soningiz juft ekan");
  }
}
