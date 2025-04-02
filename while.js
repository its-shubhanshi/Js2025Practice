"use strict";

let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

let fruits = ["mango", "apple", "papaya", "guvava", "banana", "grapes"];
for (let i = 0; i < fruits.length; i++) {
  document.writeln(`<h2 style="color:red;">${i + 1}   ${fruits[i]}</h2>`);
  console.log(i, fruits[i]);
}

for (let i = fruits.length - 1; i > 0; i--) {
  document.write(`<h2 style="color:blue;">${fruits[i]}</h2>`);
  console.log(i, fruits[i]);
}
