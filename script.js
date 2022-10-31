let num = 8;
let line = "";

for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    if ((j % 2 === 0 && i % 2 === 0) || (j % 2 === 1 && i % 2 === 1)) {
      line += " + ";
    } else {
      line += " # ";
    }
  }
  console.log(line);
  line = "";
}

// Shaxmat doskasi
