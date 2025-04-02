"use strict";
let fruits = ["mango", "apple", "banana", "lichi", "orange"];
fruits.push("pineapple");

for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

let heros = [
  ["ironman", "spiderman", "thor"],
  ["superWomen", "wonder women", "flash"],
];

for (let i = 0; i < heros.length; i++) {
  console.log(`List #${i}`);
  console.log(heros[i]);

  for (let j = 0; j < heros[i].length; j++) {
    console.log(j + 1, heros[i][j]);
  }
}
console.log("student value");

let student = [
  ["aman", 99],
  ["Shraddha", 44],
  ["Amrita", 78],
  ["Guddi", 55],
  ["karan", 66],
];

for (let i = 0; i < student.length; i++) {
  console.log("information of student no. :", i);

  for (let j = 0; j < student[i].length; j++) {
    console.log(student[i][j]);
  }
}

console.log("for of loop");

for (let fruit of fruits) {
  console.log(fruit);
}
let userName = "Prachi Srivastava";

for (let uname of userName) {
  console.log(uname);
}

console.log("List of heros");

for (let list of heros) {
  console.log(list);
  for (name of list) {
    console.log(name);
  }
}
